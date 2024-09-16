import React from 'react';
import './MarketListed.css';
import potato from "../assets/potato.png"; // Adjust the path to your image

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
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default MarketListed;
