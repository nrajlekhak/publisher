import { Router } from 'express'
import { checkRoles } from '../middlewares/checkAuth'
import articleRouter from './articleRouter'
import homeRouter from './homeRouter'

const routes = Router()

routes.use('/articles', checkRoles(['admin', 'publisher']), articleRouter)
routes.use('/', homeRouter)

export default routes
