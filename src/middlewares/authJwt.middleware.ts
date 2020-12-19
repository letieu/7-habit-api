import { Request, Response } from 'express'
import { BadRequest } from '../utils/error'
import { verify } from '../utils/jwt.utils'

export const authJwt = (req: Request, res: Response, next) => {
    const authHeader = req.headers.authorization
    
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        const user = verify(token)
        if (!user) {
            throw new BadRequest('token not match')
        }

        req.user = user
        next()
    } else {
        res.sendStatus(401)
    }
}
