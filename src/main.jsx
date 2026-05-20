import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PriceList from './pages/PriceList.jsx'
import FAQ from './pages/FAQ.jsx'
import CancellationPolicy from './pages/CancellationPolicy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/fiery-nail-bar">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pricelist" element={<PriceList />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
