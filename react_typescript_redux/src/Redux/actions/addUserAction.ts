import { ADD_USER, REMOVE_USER } from "../actionTypes"

export function addUser(user: IUser){
    const action: UserAction = {
        type: ADD_USER,
        user
    }
    return action
}

export function removeUser(user: IUser){
    const action: UserAction = {
        type: REMOVE_USER,
        user
    }
    return action
}