import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Brewing from './Pages/Brewing.jsx'
import Weather from './Pages/Weather.jsx'
import Dogfeeder from './Pages/Dogfeeder.jsx'
import './index.css'


import { HashRouter as Router, Route, Routes, createHashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/brewing" element={<Brewing />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/dogfeeder" element={<Dogfeeder />} />
      </Routes>
    </Router>
  </StrictMode>,
)


//<App />