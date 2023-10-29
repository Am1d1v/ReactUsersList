import Card from "../UserInterface/Card";
import Button from "../UserInterface/Button";
import './CreateUser.css';
import { useState } from "react";
import ErrorModal from "../UserInterface/ErrorModal";

function CreateUser(props){

    const {onCreateUser} = props;

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [error, setError] = useState();

    const createUserHandler = (event) => {
        event.preventDefault();

        // Check Form Validation, input values must be longer than 0 symbols
        if (inputName.trim().length === 0 || inputAge.trim().length === 0 || +inputAge) {
            setError({
                title: 'Некорректный ввод',
                message: 'Это поля не могут быть пустыми'
            });
            return;
        }

        // Check Form Validation, input age must be higher than 0
        if (+inputAge < 1){
            setError({
                title: 'Некорректный возраст',
                message: 'Возраст должен быть больше 0'
            });
            return;
        }

        // Add New User in array
        onCreateUser(inputName, inputAge);

        // Clear Input Fields
        setInputName('')
        setInputAge('')
    }

    // Close Modal Window
    const errorHandler = () => {
        setError(false);
    }

    // Name Input Handler
    const inputNameHandler = (event) => {
        setInputName(event.target.value);
    }

    // Age Input Handler
    const inputAgeHandler = (event) => {
        setInputAge(event.target.value);
    }

    return(
        <>
            {error && <ErrorModal title={error.title} message={error.message} onCloseModal={errorHandler}/>}
            <Card className="input">
                <form onSubmit={createUserHandler}>
                    <label htmlFor="name">Имя</label>
                    <input id="name" type="text" onChange={inputNameHandler} value={inputName}/>
                    <label htmlFor="age">Возраст</label>
                    <input id="age" type="number" onChange={inputAgeHandler} value={inputAge}/>
                    <Button type={'submit'} text='Добавить Пользователя' />
                </form>
            </Card>
        </>
    )
}
export default CreateUser;