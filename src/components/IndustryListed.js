import React from 'react';
import './IndustryListed.css';
import potato from '../assets/potato.png'; // Replace with your actual image path

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
            <img src={potato} alt="Potato" className="industry-listed-card-image" />
            <h3 className="industry-listed-card-title">Potato</h3>
            <h3 className="industry-listed-card-price">Price: ₹10/kg</h3>
            <h3 className="industry-listed-card-quantity">Quantity: 400kg</h3>
          </div>
          <div className="industry-listed-card">
            <img src={potato} alt="Potato" className="industry-listed-card-image" />
            <h3 className="industry-listed-card-title">Potato</h3>
            <h3 className="industry-listed-card-price">Price: ₹10/kg</h3>
            <h3 className="industry-listed-card-quantity">Quantity: 400kg</h3>
          </div>
          <div className="industry-listed-card">
            <img src={potato} alt="Potato" className="industry-listed-card-image" />
            <h3 className="industry-listed-card-title">Potato</h3>
            <h3 className="industry-listed-card-price">Price: ₹10/kg</h3>
            <h3 className="industry-listed-card-quantity">Quantity: 400kg</h3>
          </div>
          <div className="industry-listed-card">
            <img src={potato} alt="Potato" className="industry-listed-card-image" />
            <h3 className="industry-listed-card-title">Potato</h3>
            <h3 className="industry-listed-card-price">Price: ₹10/kg</h3>
            <h3 className="industry-listed-card-quantity">Quantity: 400kg</h3>
          </div>
          <div className="industry-listed-card">
            <img src={potato} alt="Potato" className="industry-listed-card-image" />
            <h3 className="industry-listed-card-title">Potato</h3>
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
