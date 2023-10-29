import './Button.css';

function Button(props){

    const {type, text} = props;

    return(
        <button type={type} className='button'>{text}</button>
    )
}
export default Button;