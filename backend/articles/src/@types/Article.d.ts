export interface Article {
  id?: string
  title: string
  description: string
  keywords: string
  metaDesc: string
  slug: string
  deletedAt?: null | Date
  createdBy?: string
  edited?: number
}

export interface ArticleHistory extends Article {
  articleId: string
  updatedBy: string
}
