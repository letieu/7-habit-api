import * as jwt from 'jsonwebtoken'
import config from '../config'

export function getTokens(id: string, username: string) {
    const access_token = jwt.sign({ id, username }, config.jwtSecet, { expiresIn: '1h' })
    const refresh_token = jwt.sign({ id, username }, config.jwtSecet, { expiresIn: '1d' })
    return {
        access_token,
        refresh_token
    }
}

export function verify(refresh_token: string): any {
    try {
        const decode = jwt.verify(refresh_token, config.jwtSecet)
        return decode
    } catch (e) {
        throw e
    }
}
