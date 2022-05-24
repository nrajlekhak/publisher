import mongoose, { Schema } from 'mongoose'
import { Article } from '../@types/Article'

const ArticleSchema = new mongoose.Schema<Article>(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
    },
    keywords: {
      type: String,
    },
    metaDesc: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    deletedAt: {
      default: null,
      type: Date,
    },
    edited: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
)

ArticleSchema.set('toJSON', {
  transform: function (_, ret) {
    delete ret._v
  },
})

const Article = mongoose.model<Article>('Article', ArticleSchema)

module.exports = Article