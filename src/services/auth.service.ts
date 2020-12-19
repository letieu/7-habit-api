import { LoginDTO, RefreshDTO } from '../dtos/user.dto'
import { User } from '../models/user.models'
import { BadRequest } from '../utils/error'
import { getTokens, verify } from '../utils/jwt.utils'

export class AuthService {
    public model = User

    async login(loginDto: LoginDTO) {
        const user = await this.model.findOne({ username: loginDto.username })
        if (!user) throw new BadRequest('credential not match')

        const match = await user.checkPass(loginDto.password)
        if (!match) throw new BadRequest('credential not match')

        const tokens = getTokens(user._id, user.username)
        return {
            user: user,
            ...tokens
        }
    }

    async refresh(refreshDto: RefreshDTO) {
        const user = verify(refreshDto.refresh_token) 
        if (user.username !== refreshDto.username) {
            throw new BadRequest('token not match')
        }

        const tokens = getTokens(user.id, user.username)
        return tokens
    }
}
