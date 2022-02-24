import { Request, Response } from "express";
import { functions } from "../../config/functions";
import { IUser } from "../../Domain/User/IUser";
import { errosApiSend } from "../../Error/apiErrorMessage";
import { userRepository } from "../../Repository/User/userRepository";

//usecase
const createUser = async (user: IUser) => {

    try {

        const emailExist = await userRepository.findUser({ email: user.email })

        if (emailExist) throw errosApiSend('E002')

        await userRepository.createUser(user)

    } catch (err) {
        return err
    }
}

//useCase
const findUserById = async (userId: string) => {
  
    if (!userId) throw new Error('User id not exist')
    return await userRepository.findUserById(userId)

}



const updateUser = async (userDataUpdate: IUser, userId: string) => {
    // verificar se email é o mesmo que está no banco, caso contratio verificar se já existe
    
    if(!userId) throw new Error('This id not exist!')
    
    const userEmailAlreadyExist = await userRepository.findUser({email: userDataUpdate.email})
    console.log(userEmailAlreadyExist)
    if(userEmailAlreadyExist){
        if((userEmailAlreadyExist._id).toString() !== userId) throw 'This e-mail is using!'
    }
    
    await userRepository.updateUser(userDataUpdate, userId)
    
}


const deleteUser= async (userId: string) => {
   
    await userRepository.deleteUser(userId)

}


const FindByUser = async (req: Request, res: Response) => {
    res.status(200).json({ ok: "ok" })
}


export const userUseCase = {
    createUser,
    updateUser,
    deleteUser,
    FindByUser,
    findUserById
}