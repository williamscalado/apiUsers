import { IUser, RepositoryUsers } from '../../Domain/User/IUser'
import { errosApiSend } from '../../Error/apiErrorMessage';
import { userModel } from './userModel';


const createUser = async (data: IUser) => {
    try {
        await userModel.validate(data)
        return await userModel.create(data)
    } catch (err) {
        return errosApiSend('E002')
    }

}


const findUser = async (Filter?: Object) => {
    try {
        return await userModel.findOne(Filter).exec()
    } catch (err) {
        throw errosApiSend('U002')
    }
}


// Repository
const findUserById = async (id: string) => {
    try {
        return await userModel
        .findOne({ _id: id }, ["-password", "-__v", "-_id", "-createAt"])
        .exec()
    } catch (err) {
        throw errosApiSend('U002')
        
    }
}


const updateUser = async (userDataUpdate: IUser, userId: string) => {
    
    await userModel.validate(userDataUpdate)
    return  await userModel.updateOne({_id : userId}, userDataUpdate);
    //if(resultUpdate !> 1) throw new Error('Update error!')
}   




const deleteUser = async (userId: string) => {

    await userModel.deleteOne({_id : userId})
}

export const userRepository: RepositoryUsers = {
    createUser,
    findUser,
    updateUser,
    deleteUser,
    findUserById
}



