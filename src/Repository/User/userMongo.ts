import  {userConnectMongo}  from '../../Middleware/MongoDB/ConnectMongo';
import { IUser, RepositoryUsers } from '../../Domain/User/IUser'
import mongoose from 'mongoose';


const conn = async () => await userConnectMongo.readyState

console.log(conn)