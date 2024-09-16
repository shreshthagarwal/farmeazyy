// components/PricePredictor.js
import React from 'react';
import './PricePredictor.css';
import pricePredictorImage from '../assets/price-predictor.png'; // PricePredictor specific image
import sharedImage from '../assets/shared-image.png'; // Shared image for AboutUs and PricePredictor
import arrowIcon from "../assets/pricepredictor-arrow.png"

function PricePredictor() {
  return (
    <div className="pricepredictor-container">
            <h2 className="pricepredictor-heading">Price Predictor</h2>
      <div className="pricepredictor-content-container">
        <div className="pricepredictor-image">
          <img src={pricePredictorImage} alt="Price Predictor" />
          <button className="predictor-button">Predict Now
          <img src={arrowIcon} alt="arrow" className="arrow-icon" />
            </button> {/* Button added */}
        </div>
        <div className="pricepredictor-textbox">
          <div className="pricepredictor-content">
            <h2>Price Predictor</h2>
            <p>At FarmEazyy, our advanced Price Prediction Model harnesses machine learning to provide accurate forecasts of crop prices.</p> <p> By analyzing historical data, weather conditions, and market trends, our model delivers real-time price predictions that enable farmers to make well-informed decisions. 
              </p> <p>This insight helps farmers optimize planting and harvesting schedules, maximize their profits, and manage risks associated with price fluctuations.</p><p> With our model, farmers gain valuable knowledge of future market conditions, allowing them to strategically sell their produce and efficiently allocate resources, ensuring greater financial stability and growth.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
        <img src={sharedImage} alt="Shared" className="shared-image" />
      </div>
    </div>
  );
}

export default PricePredictor;
