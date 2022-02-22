import { Request, Response, NextFunction } from "express"

export const userValidatios = (Schema: any) => async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const data = req.body
        await Schema.validate(data)
        return next()

    } catch (err) {
        res.status(400).json({err})  
    }
}

