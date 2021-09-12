import React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
    user: IUser;
}

export const User: React.FC<Props> = ({ user }) => {
    const dispatch: Dispatch<any> = useDispatch()

    return(
        <div className = "User">
            <div>
                <h1>{user.title}</h1>
                <p>{user.body}</p>
            </div>
        </div>
    )
}