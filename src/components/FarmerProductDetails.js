// components/FarmerProductDetails.js
import React from 'react';
import './FarmerProductDetails.css';
import detailsImage from '../assets/farmer-product-icon.png'; // Adjust the path to where the image is stored

function FarmerProductDetails() {
  return (
    <div className="product-details">
      <div className="details-left">
        <h1>PRODUCT DETAILS</h1>
        <img src={detailsImage} alt="Details Icon" className="details-image" />
      </div>
      <div className="details-right">
        <form>
          <div className="input-row">
            <div className="input-group">
              <label>Crop Name</label>
              <input type="text" placeholder="Crop Name" />
            </div>
            <div className="input-group">
              <label>Quantity</label>
              <input type="text" placeholder="Quantity" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>Month</label>
              <input type="text" placeholder="Month" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>Season</label>
              <input type="text" placeholder="Season" />
            </div>
            <div className="input-group">
              <label>Temperature</label>
              <input type="text" placeholder="Temperature" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>Disaster (in last 3 months)</label>
              <input type="text" placeholder="Disaster (in last 3 months)" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>Condition</label>
              <input type="text" placeholder="Condition" />
            </div>
          </div>
          <div className="input-row">
            <button type="button" className="get-price">Get price</button>
            <div className="input-group">
              <label>Final Price</label>
              <input type="text" placeholder="Final Price" />
            </div>
          </div>
          <button type="button" className="list-btn">List</button>
        </form>
      </div>
    </div>
  );
}

export default FarmerProductDetails;
