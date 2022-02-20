import { IUser, RepositoryUsers } from '../../Domain/User/IUser'
import { userModel } from './userModel';


const createUser = async (data: IUser) => {
    try {
        const create = await userModel.create(data)
        return create

    } catch (err) {
        throw new Error('Fails Create').message
    }

}


const findUser = async (Filter: Object) => {

    try {
        const Result = await userModel.findOne(Filter).exec()
        return Result
    } catch (err) {
        throw new Error('Find error').message
    }
}

export const userRepository: RepositoryUsers = {
    createUser,
    findUser
}



