import express, { Request, Response } from 'express'

import { create, update, destroy, getAll, getOne } from '../services/article'

const articleRouter = express.Router()

articleRouter.post('/create', async (req: Request, res: Response) => {
  try {
    const { title, description, keywords, metaDesc, slug, featured_image } = req.body

    const article = await create({
      title,
      description,
      keywords,
      metaDesc,
      slug,
      createdBy: req.user?.id,
      authorName: req.user?.name,
      featured_image,
    })
    return res.status(201).json(article)
  } catch (e) {
    return res.status(422).json(e)
  }
})

articleRouter.get('/:slug', async (req: Request, res: Response) => {
  const { slug } = req.params
  const article = await getOne({
    slug,
    userRole: {
      isAdmin: req.isAdmin || false,
      isPublisher: req.isPublisher || false,
      userId: req.user?.id || null,
    },
  })
  return res.status(200).json(article)
})

articleRouter.patch('/update/:id', async (req: Request, res: Response) => {
  try {
    const { title, description, keywords, metaDesc, slug, featured_image } = req.body
    const { id } = req.params
    const updatedArticle = await update(
      { title, description, keywords, metaDesc, slug, featured_image },
      id,
      req.user?.id || null
    )
    return res.status(200).json(updatedArticle)
  } catch (e) {
    return res.status(422).json(e)
  }
})

articleRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const resp = await destroy(
    {
      articleId: id,
      userRole: {
        isAdmin: req.isAdmin || false,
        isPublisher: req.isPublisher || false,
        userId: req.user?.id || null,
      },
    },
    req.user?.id || null
  )
  console.log(resp)
  return res.status(200).json({ message: 'Article Deleted' })
})

articleRouter.get('/', async (req: Request, res: Response) => {
  const articles = await getAll({
    isAdmin: req.isAdmin || false,
    isPublisher: req.isPublisher || false,
    userId: req.user?.id || null,
  })
  return res.status(200).json(articles)
})

export default articleRouter
