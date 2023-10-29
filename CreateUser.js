import Card from "../UserInterface/Card";
import Button from "../UserInterface/Button";

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
                <Button type={'submit'}/>
            </form>
        </Card>
    )
}
export default CreateUser;