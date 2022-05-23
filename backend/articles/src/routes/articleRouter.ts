import express, { Request, Response } from 'express'

const articleRouter = express.Router()

articleRouter.get('/create', async (req: Request, res: Response) => {
  return res.json({ created: true })
})

export default articleRouter
