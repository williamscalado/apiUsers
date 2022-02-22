import { Request, Response } from "express";
import { IUser } from "../../Domain/User/IUser";
import { userUseCase } from "../../UseCase/User/userUseCase";
import { functions } from "../../config/functions";

// constroller
const createUser = async (req: Request, res: Response) => {
    let user: IUser = req.body
    const keyPassword = process.env.SECRETKEYPASSWORD

    try {

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


function updateUser(req: Request, res: Response) {

}


function deleteUser(req: Request, res: Response) {

}


const FindByUser = async (req: Request, res: Response) => {
    res.status(200).json({ ok: "ok" })
}


export {
    createUser,
    updateUser,
    deleteUser,
    FindByUser
}