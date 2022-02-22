const yup = require("yup")


export const loginModel = yup.object({
    email : yup.string().email().required(),
    password: yup.string().required()
})

