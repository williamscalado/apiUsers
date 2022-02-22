import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const userMongo = process.env.USERMONGO
const passwordMongo = process.env.PASSWORDMONGO
const urlMongo = `mongodb+srv://${userMongo}:${passwordMongo}@cluster0.f9ejx.mongodb.net/useradmin?retryWrites=true&w=majority`

export const userConnectMongo =  mongoose.createConnection(urlMongo);




