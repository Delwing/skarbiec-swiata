import './StartScreen.css'
import logo from '../assets/logo.svg'

function StartScreen() {
    return (
        <div className="start-screen">
            <img src={logo} alt="Logo"/>
            <div role="button" className={'start-button'}>
                Start
            </div>
        </div>
    )
}

export default StartScreen
