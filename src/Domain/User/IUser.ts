import { boolean } from "yup"

export  interface IUser {
    _id?: string,
    name: string,
    lastName: string,
    email: string,
    password: string,
    createAt?: Date,
    active?: boolean
}


export  interface RepositoryUsers {
    createUser(data: IUser): any
    findUser(Filter: Object): any
    updateUser(data: IUser, _id: string): any
    deleteUser(id: string):any

}


export  interface userUseCase {
    createUser(data: IUser): any
    findUser(Filter: Object): any
    updateUser(data: IUser, _id: string): any
    deleteUser(id: string):any

}



