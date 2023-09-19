import React from 'react'
import ReactDOM from 'react-dom/client'
import 'remixicon/fonts/remixicon.css'
import './index.css'
import Router from './utils/Routers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
)
