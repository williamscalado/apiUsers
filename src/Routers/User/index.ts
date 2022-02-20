import { Router, Request, Response } from "express";
import { userConnectMongo } from "../../Repository/User/ConnectMongo";



const routerUser = Router()

routerUser.get('/user', userConnectMongo, (request: Request, response: Response) => {
    response.send('ola!')
})


export { routerUser }