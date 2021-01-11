import * as jwt from 'jsonwebtoken'
import config from '../config'
import {Id} from '../types/base.type'

export function getTokens(id: Id) {
    const access_token = jwt.sign({ id }, config.jwtSecet, { expiresIn: '1h' })
    //const refresh_token = jwt.sign({ id }, config.jwtSecet, { expiresIn: '1d' })
    return access_token
}

export function verify(refresh_token: string): any {
    try {
        const decode = jwt.verify(refresh_token, config.jwtSecet)
        return decode
    } catch (e) {
        throw e
    }
}
