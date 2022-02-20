import IUser from '../User/IUser'

export interface Ilogin {
    email: string,
    password: string
}

export interface RepositoryLogin {

    findByUser(data: Ilogin): IUser,
    logOut(): void

}

export interface IpasswordUsecase{

    cryptoPassword(password: string):any,
    

}
