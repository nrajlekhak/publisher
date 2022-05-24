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
      id: articleId,
      deletedAt: { $eq: null },
    })
    if (!foundArticle) {
      throw { message: 'Article not found' }
    }

    console.log('article found')

    // copy it to ArticleHistory
    await ArticleHistory.create({
      title: foundArticle.title,
      description: foundArticle.description,
      slug: foundArticle.slug,
      keywords: foundArticle.keywords,
      metaDesc: foundArticle.metaDesc,
      articleId: foundArticle.id,
      updatedBy: updatedBy,
      deletedAt: foundArticle.deletedAt,
      createdBy: foundArticle.createdBy,
      edited: foundArticle.edited,
    })
    console.log('article copied')

    // update the article
    const updatedArticle = await Article.findOneAndUpdate(
      { id: articleId },
      { ...article, edited: foundArticle.edited ? foundArticle.edited + 1 : 1 },
      {
        new: true,
      }
    )
    console.log('article updated')

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
  if (userRole.isAdmin) {
    return Article.findOne({ slug: slug, deletedAt: { $eq: null } })
  }
  return Article.findOne({
    slug: slug,
    deletedAt: { $eq: null },
    createdBy: { $eq: userRole.userId },
  })
}

export const destroy = async (
  { articleId, userRole }: { articleId: string; userRole: UserRole },
  deletedBy: string | null
) => {
  if (userRole.isAdmin) {
    return Article.findOneAndUpdate(
      { id: articleId },
      { deletedAt: new Date(), deletedBy: deletedBy }
    )
  }
  return Article.findOneAndUpdate(
    { id: articleId, createdBy: { $eq: userRole.userId } },
    { deletedAt: new Date(), deletedBy: deletedBy }
  )
}
