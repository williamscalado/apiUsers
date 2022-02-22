import { Router } from "express";
import { loginUser } from "../../Controllers/Login";

const routerLogin = Router()



routerLogin.post('/login', loginUser)


export { routerLogin }