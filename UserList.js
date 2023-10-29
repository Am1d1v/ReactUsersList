import './UserList.css'
import Card from "../UserInterface/Card";

function UserList(props){

    const {users} = props
    
    return(
        <Card className='users'>
            <ul>
                {users.map((user, i) => {
                    return <li key={i}>{user.name} - {user.age} лет</li>
                })}
            </ul>
        </Card>
    )
}
export default UserList;