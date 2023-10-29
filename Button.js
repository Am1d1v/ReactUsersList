import './Button.css';

function Button(props){

    const {type, text, onCloseModal} = props;

    return(
        <button type={type} className='button' onClick={onCloseModal}>{text}</button>
    )
}
export default Button;