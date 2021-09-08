import { ADD_USER } from "../actionTypes"

export function addUser(user: IUser){
    const action: UserAction = {
        type: ADD_USER,
        user
    }
    return action
}