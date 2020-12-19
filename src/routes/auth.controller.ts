import { Router } from 'express'
import { LoginDTO, RefreshDTO, RegisterDTO } from '../dtos/user.dto'
import { UsersService, AuthService } from '../services'
import { validateDTO } from '../utils/validate'

const userService = new UsersService()
const authServie = new AuthService()

const router = Router()

router.post('/register', async (req, res, next) => {
    try {
        const userDto = await validateDTO(RegisterDTO, req.body)
        const user = await userService.create(userDto)
        res.json(user)
    } catch (e) {
        next(e)
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const loginDto = await validateDTO(LoginDTO, req.body)
        const auth = await authServie.login(loginDto)
        res.json(auth)
    } catch (e) {
        next(e)
    }
})

router.post('/refresh', async (req, res, next) => {
    try {
        const refreshDto = await validateDTO(RefreshDTO, req.body)
        const access_token = await authServie.refresh(refreshDto)
        res.json(access_token)
    } catch (e) {
        next(e)
    }
})

export default router
