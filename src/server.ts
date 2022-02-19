import Express from "express";
import dotenv from 'dotenv'
import { routerUser } from './Routers/User/index'

dotenv.config() 

const app = Express();

app.use(Express.json())


//Routers
app.use(routerUser)




app.listen(process.env.PORT)


