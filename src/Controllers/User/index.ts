import { Request, Response } from "express";
import { IUser } from "../../Domain/User/IUser";
import { passwordUseCase } from '../../UseCase/login/passwordUseCase'
import validator from "validator";

function checkDataUser(data: any, msg: string) {
    let bodyMsg = {
        erro: true,
        message: msg
    }
    let Erro = JSON.stringify(bodyMsg)
    if (typeof data == 'undefined' || !data) throw new Error(Erro).message
}



function createUser(req: Request, res: Response) {
    let user: IUser = req.body
    checkDataUser(user.name, 'Name is required')
    checkDataUser(user.lastName, 'Last Name is required')
    checkDataUser(user.password, 'Password is required')
    if (!validator.isEmail(user.email)) throw '{erro : true, message: "Email incorrect"}'

    const newPassword = passwordUseCase.cryptoPassword(user.password)
    user = {
        ...user,
        password: newPassword
    }

    // chamo o repository para criar 


    res.status(200).json(user)
}


function updateUser(req: Request, res: Response) {

}


function deleteUser(req: Request, res: Response) {

}


function FindByUser(req: Request, res: Response) {

}


export {
    createUser,
    updateUser,
    deleteUser,
    FindByUser
}