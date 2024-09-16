import React from 'react';
import './IndustrySell.css'; // Import the CSS file
import industryImage from '../assets/industry-sell-image.png'; // Replace with your actual image path

const IndustrySell = () => {
  return (
    <div className="industry-sell-container">
      <img
        src={industryImage}
        alt="Industry"
        className="industry-sell-image"
      />
      <h1 className="industry-sell-heading">SELL</h1>
      <div className="industry-sell-content">
        <div className="industry-sell-form">
          <div className="industry-sell-form-row">
            <div className="industry-sell-form-group">
              <label htmlFor="productName">Product Name:</label>
              <input type="text" id="productName" name="productName" />
            </div>
            <div className="industry-sell-form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input type="text" id="quantity" name="quantity" />
            </div>
          </div>
          <div className="industry-sell-form-row">
            <button type="submit" className="industry-sell-button">List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySell;
