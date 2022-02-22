import dotenv from 'dotenv'
let  Crypto = require('crypto')

dotenv.config();

function cryptoPassword(password: string, Secret: string) {
     const newPassword = Crypto
        .createHash('sha256', `${Secret}`)
        .update(password)
        .digest('hex')

    return newPassword
}


export const functions = {
    cryptoPassword
}

