// components/AboutUs.js
import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/aboutus-right.png'; // About Us specific image

function AboutUs() {
  return (
    <div className="aboutus-container">
      <h2 className="aboutus-heading">About Us</h2>
      <div className="aboutus-content-container">
        <div className="aboutus-textbox">
          <div className="aboutus-content">
            <p>At Farm Eazy, we are driven by a simple yet powerful mission: to uplift and support the farmers who feed our nation. We understand the hard work and dedication that goes into farming, and we believe that every farmer deserves a fair and direct path to market. </p> <p> 
Leveraging our advanced price predictor model, we help farmers get the best possible value for their crops by offering data-driven insights that reflect real-time market trends. By removing middlemen from the equation, we ensure that farmers can sell their produce at correct and deserving rates worthy of the quality produce.
</p> <p>
Whether you are a consumer looking for fresh food, a retailer in need of reliable suppliers, or an industry player seeking consistent quality, Farm Eazy is your trusted partner in the agricultural supply chain.
</p>
            {/* Add more content as needed */}
          </div>
        </div>
        <div className="aboutus-image">
          <img src={aboutImage} alt="About Us" />
        </div>
        
      </div>
    </div>
  );
}

export default AboutUs;
