import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
import dotenv from 'dotenv'
import { userRepository } from "../../Repository/User/userRepository";
import { IUser } from "../../Domain/User/IUser";
dotenv.config()

// verificar se o token é invalido 
// verificar se o usuario existe e está ativo
// 

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {

    const userToken = req.headers['x-acess-token'];
    const SECRET = process.env.SECRETTOKEN

    try {

        const verifyTokenUser = await jwt.verify(userToken, SECRET)
        const idUser = verifyTokenUser.acess
        const verifyUserExist: IUser = await userRepository.findUser({ _id: idUser })

        if (!verifyUserExist) throw Error('User not exit!')
        if (!verifyUserExist.active == true) throw Error('User not unauthorized!')
        next();

    } catch (err) {
        res.status(401).json({ status: "error", menssage: err })
    }
}
