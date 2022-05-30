import { Router } from 'express'
import { checkRoles } from '../middlewares/checkAuth'
import articleRouter from './articleRouter'
import commentRouter from './commentRouter'
import homeRouter from './homeRouter'

const routes = Router()

routes.use('/articles', checkRoles(['admin', 'publisher']), articleRouter)
routes.use('/comments', commentRouter)
routes.use('/', homeRouter)

export default routes
