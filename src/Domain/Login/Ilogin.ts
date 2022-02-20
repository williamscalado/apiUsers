import IUser from '../User/IUser'

interface Ilogin {
    email: string,
    password: string
}

interface RepositoryLogin {

    findByUser(data: Ilogin): IUser,
    logOut(): void

}