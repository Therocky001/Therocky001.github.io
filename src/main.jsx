import React from 'react'
import { createRoot } from 'react-dom/client'
import AppSimple from './AppSimple'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppSimple />
  </React.StrictMode>
)
