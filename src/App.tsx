import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const StartScreen = lazy(() => import('./screens/StartScreen'))
const GameScreen = lazy(() => import('./screens/GameScreen'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </Suspense>
  )
}

export default App
