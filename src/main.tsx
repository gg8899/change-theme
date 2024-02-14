import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import App from './pages/App.tsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
