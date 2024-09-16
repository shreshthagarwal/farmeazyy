// SelectionPage.js
import React from 'react';
import './SelectionPage.css'; // Add custom styles here
import { Link } from 'react-router-dom';
import arrowIcon from "../assets/selection-arrow.png";
import farmerImage from "../assets/farmer-selection.png"; // Replace with the actual path
import industryImage from "../assets/industry-selection.png"; // Replace with the actual path
import marketImage from "../assets/markey-selection.png"; // Replace with the actual path

function SelectionPage() {
  return (
    <div className="selection-container">
      <div className="selection-item">
        <img src={farmerImage} alt="Farmer" className="selection-icon" />
        <Link to="/farmer" className="selection-button">
          Farmer
          <img src={arrowIcon} alt="arrow" className="arrow-icon" />
        </Link>
      </div>
      <div className="selection-item">
        <img src={industryImage} alt="Industry" className="selection-icon" />
        <Link to="/industry" className="selection-button">
          Industry
          <img src={arrowIcon} alt="arrow" className="arrow-icon" />
        </Link>
      </div>
      <div className="selection-item">
        <img src={marketImage} alt="Market" className="selection-icon" />
        <Link to="/market" className="selection-button">
          Market
          <img src={arrowIcon} alt="arrow" className="arrow-icon" />
        </Link>
      </div>
    </div>
  );
}

export default SelectionPage;
