import CreateUser from "./components/Users/CreateUser";
import UserList from '../src/components/Users/UserList'
import { useState } from "react";

function App() {

  const [userList, setUserList] = useState([]);

  // Add New User
  const createUserHandler = (name, age) =>{

    
    setUserList((previousUserList) => {
      return [{name: name, age: age}, ...previousUserList]
    })
  }

  return (
    <div className="App">
      <CreateUser onCreateUser={createUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
