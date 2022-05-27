import express, { Request, Response } from 'express'

import { getAll, getOne } from '../services/home'

const homeRouter = express.Router()

homeRouter.get('/:slug', async (req: Request, res: Response) => {
  const { slug } = req.params
  const article = await getOne({ slug })
  return res.status(200).json(article)
})

homeRouter.get('/', async (req: Request, res: Response) => {
  const articles = await getAll()
  return res.status(200).json(articles)
})

export default homeRouter
