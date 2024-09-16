import React from 'react';
import './IndustryListed.css';
import potato from '../assets/potato.png'; // Replace with your actual image path
import onion from "../assets/onion.png";
import tomato from "../assets/tomato.png";
import peas from "../assets/peas.png";
import cauliflower from "../assets/cauliflower.png";
import spinach from "../assets/spinach.png";

const IndustryListed = () => {
  return (
    <div className="industry-listed-main-container">
      <div className="industry-listed-inner-container">
        <h1 className="industry-listed-heading">BOUGHT/SOLD</h1>
        <div className="industry-listed-items-container">
          {/* Example Card */}
          <div className="industry-listed-card">
            <img src={potato} alt="Potato" className="industry-listed-card-image" />
            <h3 className="industry-listed-card-title">Potato</h3>
            <h3 className="industry-listed-card-price">Price: ₹10/kg</h3>
            <h3 className="industry-listed-card-quantity">Quantity: 400kg</h3>
          </div>
          <div className="industry-listed-card">
            <img src={onion} alt="Potato" className="industry-listed-card-image" />
            <h3 className="industry-listed-card-title">Onion</h3>
            <h3 className="industry-listed-card-price">Price: ₹10/kg</h3>
            <h3 className="industry-listed-card-quantity">Quantity: 400kg</h3>
          </div>
          <div className="industry-listed-card">
            <img src={tomato} alt="Potato" className="industry-listed-card-image" />
            <h3 className="industry-listed-card-title">Tomato</h3>
            <h3 className="industry-listed-card-price">Price: ₹10/kg</h3>
            <h3 className="industry-listed-card-quantity">Quantity: 400kg</h3>
          </div>
          <div className="industry-listed-card">
            <img src={peas} alt="Potato" className="industry-listed-card-image" />
            <h3 className="industry-listed-card-title">Peas</h3>
            <h3 className="industry-listed-card-price">Price: ₹10/kg</h3>
            <h3 className="industry-listed-card-quantity">Quantity: 400kg</h3>
          </div>
          <div className="industry-listed-card">
            <img src={cauliflower} alt="Potato" className="industry-listed-card-image" />
            <h3 className="industry-listed-card-title">Cauliflower</h3>
            <h3 className="industry-listed-card-price">Price: ₹10/kg</h3>
            <h3 className="industry-listed-card-quantity">Quantity: 400kg</h3>
          </div>
          <div className="industry-listed-card">
            <img src={spinach} alt="Potato" className="industry-listed-card-image" />
            <h3 className="industry-listed-card-title">Spinach</h3>
            <h3 className="industry-listed-card-price">Price: ₹10/kg</h3>
            <h3 className="industry-listed-card-quantity">Quantity: 400kg</h3>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default IndustryListed;
