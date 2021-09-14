import React from "react"

type Props = {
    saveUser: (user: IUser | any) => void;
}

export const AddUser: React.FC<Props> = ({ saveUser }) => {
    const [user, setUser] = React.useState<IUser | {}>();

    const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    const addNewUser = (e: React.FormEvent) => {
        e.preventDefault()
        saveUser(user)
    }

    return (
        <form onSubmit={addNewUser} className="Add-user">
            <input
                type="text"
                id="name"
                placeholder="Name"
                onChange={handleUserData}
            />
            <input
                type="number"
                id="age"
                placeholder="Age"
                onChange={handleUserData}
            />
            <input
                type="text"
                id="note"
                placeholder="Note"
                onChange={handleUserData}
            />
            <input
                type="text"
                id="location"
                placeholder="Location"
                onChange={handleUserData}
            />
            <button disabled={user === true ? true : false}> Add User</button>
        </form>
    )
}