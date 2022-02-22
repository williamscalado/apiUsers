import { Request, Response } from "express";
import { Ilogin } from "../../Domain/Login/Ilogin";
import { userRepository } from "../../Repository/User/userRepository";
import dotenv from 'dotenv'
import jwt from "jsonwebtoken"
import { functions } from "../../config/functions";

const yup = require('yup')
dotenv.config()

const loginModel = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
})


export const loginUserUseCase = async (data: Ilogin) => {


    const keyPassword = process.env.SECRETKEYPASSWORD
    const password = functions.cryptoPassword(data.password, `${keyPassword}`)

    try {
        const result = await userRepository.findUser({
            email: data.email,
            password: password
        })
        await loginModel.validate(data)
        if (!result) throw 'User not exist!'


        const idUser = {
            acess: result._id
        }
        let Secret = (process.env.SECRETTOKEN)
        const webToken = jwt.sign(idUser, `${Secret}`, { algorithm: 'HS256', expiresIn: 300 })

        return {staus: "sucess", token: webToken}

    } catch (err) {
        return {staus: "Error", msg: err}
    }



}