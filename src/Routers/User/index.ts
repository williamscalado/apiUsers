import { Router, Request, Response } from "express";
import { createUser, deleteUser, FindByUser, updateUser } from "../../Controllers/User";


const routerUser = Router()

routerUser.get('/user', FindByUser)
routerUser.post('/user', createUser)
routerUser.patch('/user', updateUser)
routerUser.delete('/user', deleteUser)

export { routerUser }