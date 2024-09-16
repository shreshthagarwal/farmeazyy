import React, { useRef } from 'react';
import './Landing.css';
import logo from '../assets/logo.png'; // Adjust the path to your logo
import backgroundImage from '../assets/landing-bg.png'; // Adjust the path to your background image
import SelectionPage from './SelectionPage'; // Import the SelectionPage component
import AboutUs from './AboutUs'; // Import the AboutUs component
import PricePredictor from './PricePredictor'; // Import the PricePredictor component
import ContactUs from './ContactUs'; // Import the ContactUs component

function Landing() {
  // Create refs for each section
  const selectionPageRef = useRef(null);
  const aboutUsRef = useRef(null);
  const pricePredictorRef = useRef(null);
  const contactUsRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="landing" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="navbar">
          <div className="navbar-left">
            <img src={logo} alt="Logo" className="logo" />
            <ul className="nav-links">
              <li onClick={() => scrollToSection(selectionPageRef)}>Selection Page</li>
              <li onClick={() => scrollToSection(aboutUsRef)}>About Us</li>
              <li onClick={() => scrollToSection(pricePredictorRef)}>Price Predictor</li>
              <li onClick={() => scrollToSection(contactUsRef)}>Contact Us</li>
            </ul>
          </div>
          <div className="navbar-right">
            <div className="language-toggle">
              <label className="toggle-label">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              <span className="language-text">ENGLISH</span>
              <span className="divider">/</span>
              <span className="language-text">HINDI</span>
            </div>
          </div>
        </div>
        <div className="heading">
          <h1><span className='span1'>Farm</span><span className='span2'>Eazyy</span></h1>
        </div>
      </div>

      {/* Sections to scroll to */}
      <div ref={selectionPageRef} className="section">
        <SelectionPage />
      </div>

      <div ref={aboutUsRef} className="section">
        <AboutUs />
      </div>

      <div ref={pricePredictorRef} className="section">
        <PricePredictor />
      </div>

      <div ref={contactUsRef} className="section">
        <ContactUs />
      </div>
    </>
  );
}

export default Landing;
