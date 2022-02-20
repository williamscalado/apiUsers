import { IpasswordUsecase, Ilogin } from '../../Domain/Login/Ilogin'
import dotenv from 'dotenv'
let  Crypto = require('crypto')

dotenv.config();


function cryptoPassword(password: string): Ilogin {
    const keyPassword = process.env.SECRETKEYPASSWORD
    const newPassword = Crypto
        .createHash('sha256', `${keyPassword}`)
        .update(password)
        .digest('hex')

    return newPassword
}

export const passwordUseCase: IpasswordUsecase = {
    cryptoPassword
}
