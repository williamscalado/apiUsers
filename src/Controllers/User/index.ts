import { Request, Response } from "express";
import { IUser } from "../../Domain/User/IUser";
import { passwordUseCase } from '../../UseCase/login/passwordUseCase'
import validator from "validator";
import { userRepository } from "../../Repository/User/userRepository";

function checkDataUser(data: any, msg: string) {
    let bodyMsg = {
        erro: true,
        message: msg
    }
    let Erro = JSON.stringify(bodyMsg)
    if (typeof data == 'undefined' || !data) throw new Error(Erro).message
}

const createUser = async (req: Request, res: Response) => {
    let user: IUser = req.body
    checkDataUser(user.name, 'Name is required')
    checkDataUser(user.lastName, 'Last Name is required')
    checkDataUser(user.password, 'Password is required')
    if (!validator.isEmail(user.email)) return res.status(500).json({erro:"Email incorrect"}) 

    const newPassword = passwordUseCase.cryptoPassword(user.password)
    user = {
        ...user,
        password: newPassword
    }
    
    const emailExist = await userRepository.findUser({email : user.email});
    if(emailExist)  return res.status(500).json({erro:"Email Exist"})
    
    userRepository.createUser(user)
    res.status(200).json({ erro: false, message: "User create!" })
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