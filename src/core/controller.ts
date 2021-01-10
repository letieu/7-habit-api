import { Request, Response } from 'express'

export function Controller(handler: Function, statusCode = null) {
  return async (req: Request, res: Response, next: any) => {
    try {
      const result = await handler(req)
      if (statusCode) {
        res.status(203).json(result)
      } else {
        res.json(result)
      }
    } catch (error) {
      next(error)
    }
  }
}

// to make a router have try catch and throw error
// Constroller()  return a function like this

//            async function (req: Request, res: Response, next: any) {
//              try {
//                .... Don something ...
//                res.json(data)
//              } catch (e) {
//                next(e)
//              }
//            }
