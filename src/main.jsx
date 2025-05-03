import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Stars } from './Stars.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Stars count={5} />
  </StrictMode>,
)
