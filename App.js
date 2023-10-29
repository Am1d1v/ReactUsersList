import CreateUser from "./components/Users/CreateUser";
import UserList from '../src/components/Users/UserList'

function App() {
  return (
    <div className="App">
      <CreateUser />
      <UserList users={[]}/>
    </div>
  );
}

export default App;
