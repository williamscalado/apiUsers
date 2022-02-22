const yup = require('yup')

const userSchema = yup.object({
    name: yup.string().min(3).required(),
    lastName: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().required()
})

export {
    userSchema
}