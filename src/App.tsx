import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Spinner from "./assets/spinner.svg"

const StartScreen = lazy(() => import('./screens/StartScreen'))
const GameScreen = lazy(() => import('./screens/GameScreen'))

function App() {
    return (
    <Suspense fallback={<div className='loader'><Spinner /></div>}>
        <Routes>
            <Route path="/" element={<StartScreen/>}/>
            <Route path="/game" element={<GameScreen/>}/>
        </Routes>
    </Suspense>
  )
}

export default App
