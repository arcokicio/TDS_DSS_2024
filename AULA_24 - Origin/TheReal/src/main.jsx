import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TheReal from './TheReal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TheReal/>
  </StrictMode>,
)