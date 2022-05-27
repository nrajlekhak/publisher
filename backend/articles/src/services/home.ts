import mongoose from 'mongoose'
import { Article } from '../@types/Article'

const Article = mongoose.model('Article')

export const getAll = async () => {
  return await Article.find({ deletedAt: { $eq: null } })
}

export const getOne = async ({ slug }: { slug: string }) => {
  try {
    const query: Record<string, unknown> = { slug: { $eq: slug }, deletedAt: { $eq: null } }

    const article = await Article.findOne(query)

    return { article }
  } catch (e) {
    console.error(e)
    throw e
  }
}