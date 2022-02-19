import mongoose from "mongoose";
import dotenv from 'dotenv'
import { NextFunction, Request, Response } from 'express'

dotenv.config()

const userMongo = process.env.USERMONGO
const passwordMongo = process.env.PASSWORDMONGO
const urlMongo = `mongodb+srv://${userMongo}:${passwordMongo}@cluster0.f9ejx.mongodb.net/user?retryWrites=true&w=majority`


const userConnectMongo = (request: Request, response: Response, next: NextFunction) => {
    mongoose.connect(urlMongo)
        .then(() => {
            next()
        })
        .catch((err) => {
            response.status(503).json({ erro: "Not Connect!" })
        })
}

export { userConnectMongo }