import { Router } from 'express'
import articleRouter from './articleRouter'

const routes = Router()

routes.use('/articles', articleRouter)

export default routes
