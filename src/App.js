// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import FarmerPage from './pages/Farmerpage.js';
import IndustryPage from './pages/Industrypage.js';
import MarketPage from './pages/Marketpage.js';
import ScrollToTop from './components/ScrollToTop.js';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/farmer" element={<FarmerPage />} />
        <Route path="/industry" element={<IndustryPage />} />
        <Route path="/market" element={<MarketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
