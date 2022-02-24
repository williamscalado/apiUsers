import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
import dotenv from 'dotenv'
dotenv.config()


export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const  userTokenFull = (req.headers.authorization)?.split(" ");
        if(!userTokenFull) throw new Error('Token invalid!')
        const SECRET = process.env.SECRETTOKEN
        const UserToken = userTokenFull[1]
        
        const verifyTokenUser = await jwt.verify(UserToken, SECRET)
        const idUser = verifyTokenUser.acess
        req.params.UserId = idUser

        next();
       

    } catch (err) {
        res.status(401).json({ status: "error", menssage: err })
    }
}
