import './ErrorModal.css'
import Card from "./Card";
import Button from "./Button";


function ErrorModal(props){

    const {title, message, onCloseModal} = props;

    return(
        <div>
            <div className='backdrop' onClick={onCloseModal}></div>
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
                <Button text='Закрыть' onCloseModal={onCloseModal}></Button>
            </footer>
        </Card>
        </div>
    )
}
export default ErrorModal;