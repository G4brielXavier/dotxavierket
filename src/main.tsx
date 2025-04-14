import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// CSS
import '@styles/index.css'

// EXTERNAL COMPONENT
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
