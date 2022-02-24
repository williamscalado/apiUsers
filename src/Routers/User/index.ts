import { Router } from "express";
import { createUser, deleteUser, findUserById, updateUser } from "../../Controllers/User";
import { userSchema } from "../../Domain/User/userValidation";
import { userValidatios } from "../../Controllers/User/userValidadion";
import { verifyToken } from "../../Middleware/login/verifyToken";


const routerUser = Router()

routerUser.get('/user', verifyToken , findUserById)
routerUser.post('/user', [userValidatios(userSchema)] , createUser)
routerUser.patch('/user',verifyToken, updateUser)
routerUser.delete('/user',verifyToken, deleteUser)

export { routerUser }