import React from 'react';
import './BuyFromFarmers.css'; // Import the CSS file
import buyfromfarmer from "../assets/buyfromfarmer.png"
import wheat from "../assets/wheat.png"
import bajra from "../assets/bajra.png"
import rice from "../assets/rice.png"


const BuyFromFarmers = () => {
  return (
    <div className="buy-from-farmers-container">
      <h1 className="buy-from-farmers-heading"><span className='span-left'>BUY</span><span className='span-right'> FROM FARMERS</span></h1>
      <div className="buy-from-farmers-cards-container">
        <div className="buy-from-farmers-card">
          <img
            src={wheat}
            alt="Fresh Organic Apples"
            className="buy-from-farmers-card-image"
          />
          <p className="buy-from-farmers-card-text">
          <h3>Wheat</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
          </p>
        </div>
        <div className="buy-from-farmers-card">
          <img
            src={bajra}
            alt="Fresh Organic Apples"
            className="buy-from-farmers-card-image"
          />
          <p className="buy-from-farmers-card-text">
          <h3>Bajra</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
          </p>
        </div>
        <div className="buy-from-farmers-card">
          <img
            src={rice}
            alt="Fresh Organic Apples"
            className="buy-from-farmers-card-image"
          />
          <p className="buy-from-farmers-card-text">
          <h3>Rice</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
          </p>
        </div>
        <div className="buy-from-farmers-card">
          <img
            src={wheat}
            alt="Fresh Organic Apples"
            className="buy-from-farmers-card-image"
          />
          <p className="buy-from-farmers-card-text">
          <h3>Wheat</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
          </p>
        </div>
        <div className="buy-from-farmers-card">
          <img
            src={bajra}
            alt="Fresh Organic Apples"
            className="buy-from-farmers-card-image"
          />
          <p className="buy-from-farmers-card-text">
          <h3>Bajra</h3>
          <h3>Price: ₹10/kg</h3>
          <h3>Quantity: 400kg</h3>
          </p>
        </div>
        {/* Add more cards as needed */}
      </div>
      <img
        src={buyfromfarmer}
        alt="Decorative"
        className="buy-from-farmers-decorative-image"
      />
    </div>
  );
};

export default BuyFromFarmers;
