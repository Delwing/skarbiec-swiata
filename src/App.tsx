import './App.css'
import { Routes, Route } from 'react-router-dom'
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen'
import PrizeScreen from './screens/PrizeScreen'

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/prize" element={<PrizeScreen />} />
      <Route path="/game" element={<GameScreen />} />
    </Routes>
  )
}

export default App
