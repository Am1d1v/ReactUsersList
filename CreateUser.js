

function CreateUser(){


    const createUserHandler = (event) => {
        event.preventDefault();
    }

    return(
        <form onSubmit={createUserHandler}>
            <label htmlFor="name">Имя</label>
            <input id="name" type="text" />
            <label htmlFor="age">Возраст</label>
            <input id="age" type="number" />
            <button type="submut">Отправить</button>
        </form>
    )
}
export default CreateUser;