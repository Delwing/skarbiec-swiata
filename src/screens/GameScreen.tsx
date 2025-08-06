import './GameScreen.css'
import map from '../assets/map.svg'

function GameScreen() {
  return (
    <div className="game-screen">
      <img src={map} alt="Map" />
    </div>
  )
}

export default GameScreen
