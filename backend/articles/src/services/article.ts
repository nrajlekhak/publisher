import mongoose from 'mongoose'
import { Article, ArticleHistory } from '../@types/Article'

const Article = mongoose.model('Article')
const ArticleHistory = mongoose.model('ArticleHistory')

interface UserRole {
  isAdmin: boolean
  isPublisher: boolean
  userId: string | null
}

export const create = async (article: Article) => {
  try {
    const newArticle = await Article.create(article)
    return newArticle
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const update = async (article: Article, articleId: string, updatedBy: string | null) => {
  try {
    // find the article
    const foundArticle: Article | null = await Article.findOne({
      id: { $eq: articleId },
      deletedAt: { $eq: null },
    })
    if (!foundArticle) {
      throw { message: 'Article not found' }
    }

    // copy it to ArticleHistory
    await ArticleHistory.create({
      title: foundArticle.title,
      description: foundArticle.description,
      slug: foundArticle.slug,
      keywords: foundArticle.keywords,
      metaDesc: foundArticle.metaDesc,
      articleId: articleId,
      updatedBy: updatedBy,
      deletedAt: foundArticle.deletedAt,
      createdBy: foundArticle.createdBy,
      edited: foundArticle.edited,
    })

    //update the article
    const updatedArticle = Article.updateOne({ _id: { $eq: articleId } }, { $set: article }).exec()

    return updatedArticle
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const getAll = async (userRole: UserRole) => {
  if (userRole.isAdmin) {
    return await Article.find({ deletedAt: { $eq: null } })
  }
  return await Article.find({ deletedAt: { $eq: null }, createdBy: { $eq: userRole.userId } })
}

export const getOne = async ({ slug, userRole }: { slug: string; userRole: UserRole }) => {
  try {
    let query: Record<string, unknown> = { slug: { $eq: slug }, deletedAt: { $eq: null } }

    if (!userRole.isAdmin) {
      query = { slug: { $eq: slug }, deletedAt: { $eq: null }, createdBy: { $eq: userRole.userId } }
    }

    const article = await Article.findOne(query)
    if (!article) {
      throw { message: ' article not found' }
    }
    const articleHistories = await ArticleHistory.find({ articleId: { $eq: article.id } })

    return { article, articleHistories }
  } catch (e) {
    console.error(e)
    throw e
  }
}

export const destroy = async (
  { articleId, userRole }: { articleId: string; userRole: UserRole },
  deletedBy: string | null
) => {
  if (userRole.isAdmin) {
    return Article.updateOne(
      { _id: { $eq: articleId } },
      { $set: { deletedAt: new Date(), deletedBy: deletedBy, edited: 1 } }
    ).exec()
  }
  return Article.updateOne(
    { _id: { $eq: articleId }, createdBy: { $eq: userRole.userId } },
    { $set: { deletedAt: new Date(), deletedBy: deletedBy, edited: 1 } }
  ).exec()
}
