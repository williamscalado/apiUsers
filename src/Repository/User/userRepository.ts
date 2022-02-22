import { IUser, RepositoryUsers } from '../../Domain/User/IUser'
import { errosApiSend } from '../../Error/apiErrorMessage';
import { userModel } from './userModel';


const createUser = async (data: IUser) => {
    try {
        const create = await userModel.create(data)
        return create

    } catch (err) {
        throw  errosApiSend.createFromCode('E002')
    }

}


const findUser = async (Filter?: Object) => {

    try {
        const Result = await userModel.findOne(Filter).exec()
        return Result
    } catch (err) {
        throw new Error('Find error').message
    }
}


const updateUser  = async (data: IUser, _id: string) =>   {
    const Result = await userModel.findOne(data).exec()
    return Result
}

const deleteUser = async (_id: string) => {

    return _id
}

export const userRepository: RepositoryUsers = {
    createUser,
    findUser,
    updateUser,
    deleteUser
}



