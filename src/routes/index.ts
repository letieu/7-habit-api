import { Router } from 'express'
import users from './user.controller'
import auth from './auth.controller'
import category from './category.controller'
import list from './list.controller'

const router = Router()
router.use('/users', users)
router.use('/auth', auth)
router.use('/categories', category)
router.use('/categories', list)

export default router
