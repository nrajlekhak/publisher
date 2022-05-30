import express, { Request, Response } from 'express'

import { create } from '../services/comment'

const commentRouter = express.Router()

commentRouter.post('/create', async (req: Request, res: Response) => {
  try {
    const { email, comment, articleId } = req.body
    const newComment = await create({ email, comment, articleId, ipAddress: req.ip })

    return res.status(201).json(newComment)
  } catch (err) {
    return res.status(500).json(err)
  }
})

export default commentRouter
