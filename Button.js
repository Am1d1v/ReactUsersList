import './Button.css';

function Button(props){

    const {type} = props;

    return(
        <button type={type} className='button'>Добавить Пользователя</button>
    )
}
export default Button;