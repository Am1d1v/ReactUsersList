import Card from "../UserInterface/Card";
import Button from "../UserInterface/Button";
import './CreateUser.css';
import { useState } from "react";

function CreateUser(){

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');

    const createUserHandler = (event) => {
        event.preventDefault();

        console.log(inputName, inputAge)
    }

    const inputNameHandler = (event) => {
        setInputName(event.target.value);
    }

    const inputAgeHandler = (event) => {
        setInputAge(event.target.value);
    }

    return(
        <Card className="input">
            <form onSubmit={createUserHandler}>
                <label htmlFor="name">Имя</label>
                <input id="name" type="text" onChange={inputNameHandler}/>
                <label htmlFor="age">Возраст</label>
                <input id="age" type="number" onChange={inputAgeHandler}/>
                <Button type={'submit'}/>
            </form>
        </Card>
    )
}
export default CreateUser;