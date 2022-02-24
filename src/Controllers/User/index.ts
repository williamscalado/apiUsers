import { Request, Response } from "express";
import { IUser } from "../../Domain/User/IUser";
import { userUseCase } from "../../UseCase/User/userUseCase";
import { functions } from "../../config/functions";
import { errosApiSend } from "../../Error/apiErrorMessage";
import { userSchemaUpdate } from "../../Domain/User/userValidation";

const keyPassword = process.env.SECRETKEYPASSWORD

// constroller
const createUser = async (req: Request, res: Response) => {


    try {
        let user: IUser = req.body

        const newPassword = functions.cryptoPassword(user.password, `${keyPassword}`)
        user = {
            ...user,
            password: newPassword
        }

        const resultCreate = await userUseCase.createUser(user)
        if (resultCreate) throw resultCreate

        res.status(201).json()

    } catch (error) {

        res.status(400).json(error)

    }

}
// constroller
const findUserById = async (req: Request, res: Response) => {
    try {
        res.status(200).json(await userUseCase.findUserById(req.params.UserId).catch((e) => { throw e }))
    } catch (error) {
        res.status(401).json(errosApiSend('U003'))
    }
}

const updateUser = async (req: Request, res: Response) => {

    try {

        const userDataUpdate = req.body
        const userId = req.params.UserId
        await userSchemaUpdate.validate(userDataUpdate)

        if (userDataUpdate.password) userDataUpdate.password = 
        functions
        .cryptoPassword(userDataUpdate.password, `${keyPassword}`)

        await userUseCase.updateUser(userDataUpdate, userId)
        res.status(200).json({ userDataUpdate })


    } catch (err) {
        res.status(401).json(err)
    }


}


const  deleteUser = async (req: Request, res: Response) => {

    try {
        const userId = req.params.UserId
     
        if(!userId) throw 'This ID not valid!'

        await userUseCase.deleteUser(userId)

        res.status(200).json()
    
    }catch (error) {
        
    }
}


const FindByUser = async (req: Request, res: Response) => {
    res.status(200).json({ ok: "ok" })
}


export {
    createUser,
    updateUser,
    deleteUser,
    FindByUser,
    findUserById
}