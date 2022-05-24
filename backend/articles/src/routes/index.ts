import { Router } from 'express'
import { checkRoles } from '../middlewares/checkAuth'
import articleRouter from './articleRouter'

const routes = Router()

routes.use('/articles', checkRoles(['admin', 'publisher']), articleRouter)

export default routes
