import { useNavigate } from 'react-router-dom'
import './PrizeScreen.css'

function PrizeScreen() {
  const navigate = useNavigate()

  const goToGame = () => {
    navigate('/game')
  }

  return (
    <div className="prize-screen">
      <button className="prize" onClick={goToGame}>Prize 1</button>
      <button className="prize" onClick={goToGame}>Prize 2</button>
      <button className="prize" onClick={goToGame}>Prize 3</button>
    </div>
  )
}

export default PrizeScreen
