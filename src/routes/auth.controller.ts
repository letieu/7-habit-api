import { Router } from 'express'
import { LoginDTO, RegisterDTO } from '../dtos/user.dto'
import { authJwt } from '../middlewares'
import { usersService, authService } from '../services'
import { validateDTO } from '../core/validate'
import { Controller } from '../core/controller'
import { Request } from 'express'
import {IUser, ResAuth} from '../types/user.type'

const router = Router()

router.post('/login',
  Controller( async (req: Request) => {
    const loginDto = await validateDTO(LoginDTO, req.body.user)
    const user: ResAuth = await authService.login(loginDto)
    return { user }
  }, 200)
)

router.post('/register',
  Controller( async (req: Request) => {
    const userDto = await validateDTO(RegisterDTO, req.body.user)
    const user: IUser = await usersService.create(userDto)
    return { user }
  })
)

router.get('/me', authJwt, 
  Controller( async (req: Request) => {
    const user: IUser = req.user
    return { user }
  })
)

export default router
