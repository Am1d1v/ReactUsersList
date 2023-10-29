import Card from "../UserInterface/Card";
import Button from "../UserInterface/Button";
import './CreateUser.css';
import { useState } from "react";

function CreateUser(){

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');

    const createUserHandler = (event) => {
        event.preventDefault();

        // Check Form Validation
        if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
            
            return;
        }

        if (+inputAge < 1){
            return;
        }

        console.log(inputName, inputAge)

        // Clear Input Fields
        setInputName('')
        setInputAge('')
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
                <input id="name" type="text" onChange={inputNameHandler} value={inputName}/>
                <label htmlFor="age">Возраст</label>
                <input id="age" type="number" onChange={inputAgeHandler} value={inputAge}/>
                <Button type={'submit'}/>
            </form>
        </Card>
    )
}
export default CreateUser;