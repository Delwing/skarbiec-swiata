import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {MemoryRouter} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import SandboxControls from './components/SandboxControls.tsx'

const rootElement = document.getElementById('root')!
createRoot(rootElement).render(
  <StrictMode>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </StrictMode>,
)

const controlsElement = document.getElementById('sandbox-controls')
if (controlsElement) {
  createRoot(controlsElement).render(<SandboxControls />)
}
