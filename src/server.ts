import Express, { Request, Response } from "express";
import dotenv from 'dotenv'
import { routerUser } from './Routers/User/index'
import { routerLogin } from "./Routers/Login";

dotenv.config()

const app = Express();
app.use(Express.json())


//Routers
app.use(routerUser)
app.use(routerLogin)




app.use((req: Request, res: Response) => {
    res.status(404).json({
        error: true,
        msgError: 'Not found'
    })
})

app.listen(process.env.PORT)


