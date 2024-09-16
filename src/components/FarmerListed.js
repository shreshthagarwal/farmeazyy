// components/FarmerListed.js
import React from 'react';
import './FarmerListed.css';
import potato from "../assets/potato.png";

function FarmerListed() {
  return (
    <div className="listed-items">
      <h1 className="listed-h1">LISTED ITEMS</h1>
      <div className="items-container">
        {/* Example Card */}
        <div className="card">
          <img src={potato} alt="Potato" />
          <h3>Potato</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
        </div>
        <div className="card">
          <img src={potato} alt="Potato" />
          <h3>Potato</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
        </div>
        <div className="card">
          <img src={potato} alt="Potato" />
          <h3>Potato</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
        </div>
        <div className="card">
          <img src={potato} alt="Potato" />
          <h3>Potato</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
        </div>
        <div className="card">
          <img src={potato} alt="Potato" />
          <h3>Potato</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
        </div>
        <div className="card">
          <img src={potato} alt="Potato" />
          <h3>Potato</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
        </div>
        <div className="card">
          <img src={potato} alt="Potato" />
          <h3>Potato</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
        </div>
        <div className="card">
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

export default FarmerListed;
