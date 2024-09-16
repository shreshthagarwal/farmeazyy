// components/FarmerLanding.js
import React,{ useRef } from 'react';
import './Landing.css'; // Reuse the same CSS for consistency
import logo from '../assets/logo.png';
import farmerBackground from '../assets/farmer-bg.png';
import FarmerProductDetails from '../components/FarmerProductDetails';
import FarmerListed from '../components/FarmerListed';

function FarmerLanding() {
  const farmerProductDetailsRef = useRef(null);
  const farmerListedRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <div className="landing" style={{ backgroundImage: `url(${farmerBackground})` }}>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <ul className="nav-links">
          <li onClick={() => scrollToSection(farmerProductDetailsRef)}>Product Details</li>
              <li onClick={() => scrollToSection(farmerListedRef)}>Listed Items</li>
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
        <h1><span className="span1">Farm</span><span className="span2">Eazyy</span><span className="span3">farmers.com</span></h1>
      </div>
    </div>
    <div ref={farmerProductDetailsRef} className="section">
    <FarmerProductDetails />
 </div>

  <div ref={farmerListedRef} className="section">
  <FarmerListed />   </div>

  </>
  );
}

export default FarmerLanding;
