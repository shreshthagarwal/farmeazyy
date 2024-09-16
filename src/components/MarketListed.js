import React from 'react';
import './MarketListed.css';
import potato from "../assets/potato.png"; // Adjust the path to your image
import onion from "../assets/onion.png";
import tomato from "../assets/tomato.png";
import peas from "../assets/peas.png";
import cauliflower from "../assets/cauliflower.png";
import spinach from "../assets/spinach.png";

function MarketListed() {
  return (
    <div className="market-listed-items">
      <h1 className="market-listed-h1">YOUR ORDERS</h1>
      <div className="market-items-container">
        {/* Example Cards */}
        <div className="market-card">
          <img src={potato} alt="Potato" />
          <h3>Potato</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
        </div>
        <div className="market-card">
          <img src={tomato} alt="Potato" />
          <h3>Tomato</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
        </div>
        <div className="market-card">
          <img src={onion} alt="Potato" />
          <h3>Onion</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
        </div>
        <div className="market-card">
          <img src={peas} alt="Potato" />
          <h3>Peas</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
        </div>
        <div className="market-card">
          <img src={cauliflower} alt="Potato" />
          <h3>Cauliflower</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
        </div>
        <div className="market-card">
          <img src={spinach} alt="Potato" />
          <h3>Spinach</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default MarketListed;
