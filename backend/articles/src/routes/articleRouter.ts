import express, { Request, Response } from 'express'

import { create, update, destroy, getAll, getOne } from '../services/article'

const articleRouter = express.Router()

articleRouter.post('/create', async (req: Request, res: Response) => {
  try {
    const { title, description, keywords, metaDesc, slug } = req.body

    const article = await create({ title, description, keywords, metaDesc, slug })
    return res.status(201).json(article)
  } catch (e) {
    return res.status(422).json(e)
  }
})

articleRouter.get('/:slug', async (req: Request, res: Response) => {
  const { slug } = req.params
  const article = await getOne({ slug })
  return res.status(200).json(article)
})

articleRouter.patch('/update/:id', async (req: Request, res: Response) => {
  const { title, description, keywords, metaDesc, slug } = req.body
  const { id } = req.params
  const updatedArticle = await update({ title, description, keywords, metaDesc, slug }, id)
  return res.status(200).json(updatedArticle)
})

articleRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  await destroy({ articleId: id })
  return res.status(200).json({ message: 'Article Deleted' })
})

articleRouter.get('/', async (req: Request, res: Response) => {
  const articles = await getAll()
  return res.status(200).json(articles)
})

export default articleRouter
