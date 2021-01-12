import { Request, Response } from 'express'
import {User} from '../models/user.model'
import { IUser } from '../types/user.type'
import { verify } from '../utils/jwt.utils'

export const authJwt = async (req: Request, res: Response, next) => {
    const authHeader = req.headers.authorization
    
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        try {
          const jwtPayload = verify(token)
          const user: IUser = await User.findOne({_id: jwtPayload.id})
          req.user = user
          next()
        } catch (e) {
          res.status(401).json(e)
        }
    } else {
        res.sendStatus(401)
    }
}
