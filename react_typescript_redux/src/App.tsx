import React from 'react';
import { useSelector, shallowEqual, useDispatch, useStore } from 'react-redux';
import './App.css';

import { User } from "./components/User"
import { AddUser } from "./components/AddUser";
import { addUser } from "./Redux/actions/addUserAction";
import { Dispatch } from "redux"

const App: React.FC = () => {
  const users: readonly IUser[] = useSelector(
    (state: UserState) => state.users,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch();

  const saveUser = React.useCallback(
    (user: IUser) => dispatch(addUser(user)),
    [dispatch]
  )

  return (
    <main>
      <h1>User Details</h1>
      <AddUser saveUser={saveUser} />
      {users.map((user: IUser) => (
        <User
          key={user.id}
          user={user}
        />
        // <div>
        //   <h1>{user.title}</h1>
        //         <p>{user.body}</p>
        // </div>
        
      ))}
    </main>
  )
}


export default App;
