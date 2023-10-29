import './ErrorModal.css'
import Card from "./Card";
import Button from "./Button";


function ErrorModal(props){

    const {title, message} = props;

    return(
        <Card className='modal'>
            <header className='header'>
                <h2>
                    {title}
                </h2>
            </header>
            <div className='content'>
                <p>
                    {message}
                </p>
            </div>
            <footer className='actions'>
                <Button text='Закрыть'></Button>
            </footer>
        </Card>
    )
}
export default ErrorModal;