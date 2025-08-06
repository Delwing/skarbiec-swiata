import './StartScreen.css'
import Logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

function StartScreen() {
    const navigate = useNavigate()

    return (
        <div className="start-screen">
            <Logo />
            <div
                role="button"
                className={'start-button'}
                onClick={() => navigate('/game')}
            >
                Start
            </div>
        </div>
    )
}

export default StartScreen
