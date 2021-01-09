import { Router } from 'express'
import { LoginDTO, RefreshDTO, RegisterDTO } from '../dtos/user.dto'
import { authJwt } from '../middlewares'
import { UsersService, AuthService } from '../services'
import { validateDTO } from '../utils/validate'
import { Controller } from '../core/controller'
import { Request, Response } from 'express'

const userService = new UsersService()
const authServie = new AuthService()
// need export instance instead Class

const router = Router()

router.post('/login',
  Controller( async (req: Request) => {
    const loginDto = await validateDTO(LoginDTO, req.body)
    return await authServie.login(loginDto)
  }, 200)
)

router.post('/register',
  Controller( async (req: Request) => {
    const userDto = await validateDTO(RegisterDTO, req.body)
    return await userService.create(userDto)
  })
)

router.post('/refresh',
  Controller( async (req: Request) => {
    const refreshDto = await validateDTO(RefreshDTO, req.body)
    return  await authServie.refresh(refreshDto)
  })
)

router.get('/me', authJwt, 
  Controller( async (req: Request) => {
    return req.user
  })
)

export default router
