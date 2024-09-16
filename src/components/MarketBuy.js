import React from 'react';
import './MarketBuy.css';
import potato from "../assets/potato.png";

const MarketBuy = () => {
  return (
    <div className="market-buy-container">
      <h2 className="market-buy-heading">Shop Farm Fresh Products</h2>
      <div className="market-buy-cards">
        {/* Example Card */}
        <div className="market-buy-card">
          <img src={potato} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Item Name</h3>
            <p className="market-buy-card-info">Info about the item</p>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={potato} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Item Name</h3>
            <p className="market-buy-card-info">Info about the item</p>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={potato} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Item Name</h3>
            <p className="market-buy-card-info">Info about the item</p>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={potato} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Item Name</h3>
            <p className="market-buy-card-info">Info about the item</p>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={potato} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Item Name</h3>
            <p className="market-buy-card-info">Info about the item</p>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={potato} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Item Name</h3>
            <p className="market-buy-card-info">Info about the item</p>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={potato} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Item Name</h3>
            <p className="market-buy-card-info">Info about the item</p>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={potato} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Item Name</h3>
            <p className="market-buy-card-info">Info about the item</p>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={potato} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Item Name</h3>
            <p className="market-buy-card-info">Info about the item</p>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default MarketBuy;
