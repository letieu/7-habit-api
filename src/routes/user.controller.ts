import { Router } from 'express'
import { usersService } from '../services'

import { authJwt } from '../middlewares'
import {Controller} from '../core/controller'

const router = Router()

router.get('/', authJwt, Controller((req: Request) => {
  return usersService.findAll()
}))

export default router

