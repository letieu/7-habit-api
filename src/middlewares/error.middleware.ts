import { GeneralError, ValidateError } from '../core/error'
import { Request, Response } from 'express'

export const errorMiddleware = (err, _: Request, res: Response, next) => {
    if (err instanceof ValidateError) {
        return res.status(err.getCode()).json({
            error: err.errors 
        })
    }
    if (err instanceof GeneralError) {
        return res.status(err.getCode()).json({
            error: err.message
        })
    }

    return res.status(500).json({
        error: err.message
    })
}
