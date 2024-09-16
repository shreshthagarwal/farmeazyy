// components/IndustryLanding.js
import React, { useRef } from 'react';
import './Landing.css'; // Reuse the same CSS for consistency
import logo from '../assets/logo.png';
import industryBackground from '../assets/industry-bg.png';
import OvalIcons from '../components/OvalIcons';
import BuyFromFarmers from '../components/BuyFromFarmers';
import IndustrySell from '../components/IndustrySell';
import IndustryListed from '../components/IndustryListed';

function IndustryLanding() {
  const buyFromFarmersRef = useRef(null);
  const industrySellRef = useRef(null);
  const industryListedRef = useRef(null);
  const ovalIconsRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="landing" style={{ backgroundImage: `url(${industryBackground})` }}>
        <div className="navbar">
          <div className="navbar-left">
            <img src={logo} alt="Logo" className="logo" />
            <ul className="nav-links">
              <li onClick={() => scrollToSection(ovalIconsRef)}>Selector</li>
              <li onClick={() => scrollToSection(buyFromFarmersRef)}>Buy</li>
              <li onClick={() => scrollToSection(industrySellRef)}>Sell</li>
              <li onClick={() => scrollToSection(industryListedRef)}>Listed</li>
            </ul>
          </div>
          <div className="navbar-right">
            <div className="language-toggle">
              <label>
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              <span>EN</span>/<span>HI</span>
            </div>
          </div>
        </div>
        <div className="heading">
          <h1><span className='span1'>Farm</span><span className='span2'>Eazyy</span><span className='span3'>industry.com</span></h1>
        </div>
      </div>
      
      {/* Pass the refs as props */}
      <div ref={ovalIconsRef} className="section">
        <OvalIcons 
          scrollToSection={scrollToSection} 
          buyRef={buyFromFarmersRef} 
          sellRef={industrySellRef} 
          listedRef={industryListedRef} 
        />
      </div>
      
      <div ref={buyFromFarmersRef} className="section">
        <BuyFromFarmers />
      </div>

      <div ref={industrySellRef} className="section">
        <IndustrySell /> 
      </div>

      <div ref={industryListedRef} className="section">
        <IndustryListed />
      </div>
    </>
  );
}

export default IndustryLanding;
