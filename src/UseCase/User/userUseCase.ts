import { Request, Response } from "express";
import { IUser } from "../../Domain/User/IUser";
import { errosApiSend } from "../../Error/apiErrorMessage";
import { userRepository } from "../../Repository/User/userRepository";

//usecase
const createUser = async (user: IUser) => {

    try {       
        const emailExist = await userRepository.findUser({ email: user.email })
      
        if(emailExist) throw errosApiSend.createFromCode('E002')

        await userRepository.createUser(user)
 
        
    }catch(err){
        return err
    }


}


function updateUser(req: Request, res: Response) {

}


function deleteUser(req: Request, res: Response) {

}


const FindByUser = async (req: Request, res: Response) => {
    res.status(200).json({ ok: "ok" })
}


export const userUseCase = {
    createUser,
    updateUser,
    deleteUser,
    FindByUser
}