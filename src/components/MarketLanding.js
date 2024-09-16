import React, { useRef } from 'react';
import './MarketLanding.css';
import logo from '../assets/logo.png'; // Adjust the path to your logo
import backgroundImage from '../assets/market-bg.png'; // Adjust the path to your background image
import MarketBuy from '../components/MarketBuy';
import MarketListed from '../components/MarketListed';

function MarketLanding() {
  // Create refs for each section
  const marketBuyRef = useRef(null);
  const marketListedRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <div className="market-landing" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <ul className="nav-links">
          <li onClick={() => scrollToSection(marketBuyRef)}>Buy</li>
              <li onClick={() => scrollToSection(marketListedRef)}>Bought</li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="language-toggle">
            <label>
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <span>ENG</span>/<span>HIN</span>
          </div>
        </div>
      </div>
      <div className="heading">
        <h1><span className='span1'>Farm</span><span className='span2'>Eazyy</span><span className='span3'>market.com</span></h1>
      </div>
    </div>
          <div ref={marketBuyRef} className="section">
          <MarketBuy />
        </div>
  
        <div ref={marketListedRef} className="section">
          <MarketListed />
        </div>
        </>
  );
}

export default MarketLanding;
