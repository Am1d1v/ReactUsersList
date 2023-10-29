import Card from "../UserInterface/Card";
import './CreateUser.css';

function CreateUser(){


    const createUserHandler = (event) => {
        event.preventDefault();
    }

    return(
        <Card className="input">
            <form onSubmit={createUserHandler}>
                <label htmlFor="name">Имя</label>
                <input id="name" type="text" />
                <label htmlFor="age">Возраст</label>
                <input id="age" type="number" />
                <button type="submut">Добавить Пользователя</button>
            </form>
        </Card>
    )
}
export default CreateUser;