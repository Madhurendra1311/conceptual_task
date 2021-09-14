import { ADD_USER, REMOVE_USER } from "../actionTypes";

const initialState: UserState = {
    users: [
        {
            id: 1,
            name: "Kunal",
            age: 25,
            note: "Full Stack",
            location: "Kolkata"
        },
        {
            id: 2,
            name: "Raunak",
            age: 24,
            note: "Front end",
            location: "Bangalore"
        }
    ]
}

const reducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch(action.type){
        case ADD_USER:
            const newUser: IUser = {
                id: Math.random(),
                name: action.user.name,
                age: action.user.age,
                note: action.user.note,
                location: action.user.location
            }
            return {
                ...state,
                users: state.users.concat(newUser)
            }
        case REMOVE_USER:
            const updatedUsers: IUser[] = state.users.filter(user => user.id!== action.user.id)
            return {
                ...state,
                users: updatedUsers
            }
    }
    return state
}

export default reducer