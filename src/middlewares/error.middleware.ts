import { GeneralError, ValidateError } from '../utils/error'
import { Request, Response } from 'express'

export const errorMiddleware = (err, _: Request, res: Response, next) => {
    if (err instanceof ValidateError) {
        return res.status(err.getCode()).json({
            error: 'validate error',
            message: 'validate error',
            validate: err.validate
        })
    }
    if (err instanceof GeneralError) {
        return res.status(err.getCode()).json({
            error: err.getCode(),
            message: err.message
        })
    }

    return res.status(500).json({
        error: '500',
        message: err.message
    })
}
