import { Router } from 'express'
import users from './user.controller'
import auth from './auth.controller'

const router = Router()
router.use('/users', users)
router.use('/auth', auth)

export default router
