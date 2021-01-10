import { Request, Response } from 'express'
import { BadRequest } from '../core/error'
import {User} from '../models/user.model'
import { IUser } from '../types/user.type'
import { verify } from '../utils/jwt.utils'

export const authJwt = async (req: Request, res: Response, next) => {
    const authHeader = req.headers.authorization
    
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        const jwtPayload = verify(token)
        if (!jwtPayload) {
            throw new BadRequest('token not match')
        }

        const user: IUser = await User.findOne({_id: jwtPayload.id})
        req.user = user
        next()
    } else {
        res.sendStatus(401)
    }
}
