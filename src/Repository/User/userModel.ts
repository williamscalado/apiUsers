import { IUser } from '../../Domain/User/IUser'
import mongoose from 'mongoose';
import { userConnectMongo } from '../../config/database';


const { Schema } = mongoose

const schema = new Schema<IUser>({
    name: {type: String , required: true},
    lastName: {type: String, required:true},
    email: {type: String, required: true, index: true, unique: true},
    password: {type: String , required: true},
    createAt: {type: Date, default: Date.now},
    active: {type: Boolean, required: false, default : true} 
}) 

export const userModel = userConnectMongo.model('User', schema)

