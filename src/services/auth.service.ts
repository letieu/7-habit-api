import { LoginDTO } from '../dtos/user.dto'
import { User } from '../models/user.model'
import { BadRequest } from '../core/error'
import { getTokens } from '../utils/jwt.utils'
import { ResAuth } from '../types/user.type'

export class AuthService {
    public model = User

    async login(loginDto: LoginDTO): Promise<ResAuth> {
        const user = await this.model.findOne({ email: loginDto.email })
        if (!user) throw new BadRequest('credential not match')

        const match = await user.checkPass(loginDto.password)
        if (!match) throw new BadRequest('credential not match')

        const access_token = getTokens(user._id)
        return {
            ...user.toJSON(),
            token: access_token 
        }
    }
}

export const authService = new AuthService()
