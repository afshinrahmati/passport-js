import {NextFunction, Request, Response} from "express"

export const standardCallbackMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("eee")
    const error = new Error("Hi")
    next(error)
}

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.send("there was an error")
}