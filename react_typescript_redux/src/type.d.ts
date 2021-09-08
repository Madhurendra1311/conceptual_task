interface IUser {
    id: number
    title: String
    body: string
}

type UserState = {
    users: IUser[];
}

type UserAction = {
    type: String
    user: IUser
}

type DispatchType = (args: UserAction) => UserAction