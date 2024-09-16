import React from 'react';
import './MarketBuy.css';
import potato from "../assets/potato.png";
import onion from "../assets/onion.png";
import tomato from "../assets/tomato.png";
import peas from "../assets/peas.png";
import cauliflower from "../assets/cauliflower.png";
import spinach from "../assets/spinach.png";


const MarketBuy = () => {
  return (
    <div className="market-buy-container">
      <h2 className="market-buy-heading">Shop Farm Fresh Products</h2>
      <div className="market-buy-cards">
        {/* Example Card */}
        <div className="market-buy-card">
          <img src={potato} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Potato</h3>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={tomato} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Tomato</h3>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={onion} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Onion</h3>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={peas} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Peas</h3>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={cauliflower} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Cauliflower</h3>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={spinach} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Spinach</h3>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={potato} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Potato</h3>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={tomato} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Tomato</h3>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={onion} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Onion</h3>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={peas} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Peas</h3>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={cauliflower} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Cauliflower</h3>
          </div>
        </div>
        <div className="market-buy-card">
          <img src={spinach} alt="Item" className="market-buy-card-image" />
          <div className="market-buy-card-content">
            <h3 className="market-buy-card-title">Spinach</h3>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default MarketBuy;
