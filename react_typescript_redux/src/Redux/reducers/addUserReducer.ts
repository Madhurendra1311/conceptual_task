import { ADD_USER } from "../actionTypes";

const initialState: UserState = {
    users: [
        {
            id: 1,
            title: "post 1",
            body: "Full stack"
        },
        {
            id: 2,
            title: "post 2",
            body: "Front end"
        }
    ]
}

const reducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch(action.type){
        case ADD_USER:
            const newUser: IUser = {
                id: Math.random(),
                title: action.user.title,
                body: action.user.body
            }
            return {
                ...state,
                users: state.users.concat(newUser)
            }
    }
    return state
}

export default reducer