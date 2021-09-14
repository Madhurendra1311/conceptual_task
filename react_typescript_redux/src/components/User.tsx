import React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { removeUser } from "../Redux/actions/addUserAction"

type Props = {
    user: IUser;
    removeUser: (user: IUser) => void
}

export const User: React.FC<Props> = ({ user }) => {
    const dispatch: Dispatch<any> = useDispatch()


    const deleteUser = React.useCallback(
        (user:IUser) => 
        dispatch(removeUser(user)),
        [dispatch]
    )

    return(
        <div className = "User">
            <div>
                <h1>{user.name}</h1>
                <p>{user.age}</p>
                <p>{user.note}</p>
                <p>{user.location}</p>
            </div>
            <button onClick={() => deleteUser(user)}>Delete</button>
        </div>
    )
}