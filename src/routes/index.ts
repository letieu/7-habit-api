import { Router } from 'express'
import users from './user.controller'
import auth from './auth.controller'
import category from './category.controller'
import list from './list.controller'
import task from './task.controller'

const router = Router()
router.use('/users', users)
router.use('/auth', auth)
router.use('/categories', category)

//  /categories/:name/lists/
router.use('/categories', list)

router.use('/tasks', task)

export default router
