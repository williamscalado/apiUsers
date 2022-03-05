import { Request, Response } from "express";
import { Ilogin } from "../../Domain/Login/Ilogin";
import dotenv from 'dotenv'
import { loginUserUseCase } from "../../UseCase/login/loginUseCase";
import { loginModel } from "../../Domain/Login/loginValidation";

dotenv.config()



export const loginUser = async (req: Request, res: Response) => {

    try {
        const data: Ilogin = req.body
        await loginModel.validate(data)
        const loginUserExec = await loginUserUseCase(data)
        if (!loginUserExec) { res.status(401); throw new Error() }

        const { status } = loginUserExec;
        res.status(status).json(loginUserExec)

    } catch (error) {
        res.status(401).json(error)

    }


}