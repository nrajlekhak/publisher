import mongoose from 'mongoose'
import { Article } from '../@types/Article'

const ArticleSchema = new mongoose.Schema<Article>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
    },
    roles: [
      {
        type: String,
      },
    ],
    token: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
)

const Article = mongoose.model<Article>('Article', ArticleSchema)

module.exports = Article
