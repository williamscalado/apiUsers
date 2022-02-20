import mongoose from "mongoose";
import dotenv from 'dotenv'
import { NextFunction, Request, Response } from 'express'

dotenv.config()

const userMongo = process.env.USERMONGO
const passwordMongo = process.env.PASSWORDMONGO
const urlMongo = `mongodb+srv://${userMongo}:${passwordMongo}@cluster0.f9ejx.mongodb.net/useradmin?retryWrites=true&w=majority`

const userConnectMongo =  mongoose.createConnection(urlMongo);



export {
    userConnectMongo
}

