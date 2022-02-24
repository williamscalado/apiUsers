const yup = require('yup')

const userSchema = yup.object({
    name: yup.string().min(3).required(),
    lastName: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().required()
})

const userSchemaUpdate = yup.object({
    name: yup.string().min(3),
    lastName: yup.string().min(3),
    email: yup.string().email(),
    password: yup.string()
})



export {
    userSchema ,
    userSchemaUpdate
}