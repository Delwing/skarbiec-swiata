import { useNavigate } from 'react-router-dom'

function StartScreen() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Start Screen</h1>
      <button onClick={() => navigate('/prize')}>Start</button>
    </div>
  )
}

export default StartScreen
