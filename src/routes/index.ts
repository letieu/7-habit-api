import { Router } from 'express'
import users from './user.controller'
import auth from './auth.controller'
import principle from './principle.controller'

const router = Router()
router.use('/users', users)
router.use('/auth', auth)
router.use('/principles', principle)

export default router
