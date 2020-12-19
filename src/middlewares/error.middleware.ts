import { GeneralError, ValidateError } from '../utils/error'
import { Request, Response } from 'express'

export const errorMiddleware = (err, _: Request, res: Response, next) => {
    if (err instanceof ValidateError) {
        return res.status(err.getCode()).json({
            status: 'validate error',
            validate: err.validate
        })
    }
    if (err instanceof GeneralError) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: err.message
    })
}
