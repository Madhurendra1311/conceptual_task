interface IUser {
    id: number;
    name: String;
    age: number;
    note: string;
    location: String;
}

type UserState = {
    users: IUser[];
}

type UserAction = {
    type: String
    user: IUser
}

type DispatchType = (args: UserAction) => UserAction