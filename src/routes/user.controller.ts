import { Router } from 'express'
import { UsersService } from '../services'

import { authJwt } from '../middlewares'

const userService = new UsersService()
const router = Router()

router.get('/', authJwt, async (req, res) => {
    const users = await userService.findAll()
    res.status(200).json(users)
})

export default router

