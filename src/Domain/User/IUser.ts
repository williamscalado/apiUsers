export default interface IUser {
    _id?: string,
    name: string,
    lastName: string,
    email: string,
    password: string,
    createAt: Date,
    active: boolean
}


export default interface RepositoryUsers {
    createUser(data: IUser): boolean,
    getUser(): IUser,
    updateUser(data: IUser, id: string): IUser,
    deteleUser(id: string): boolean

}
