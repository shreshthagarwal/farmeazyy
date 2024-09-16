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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              non purus ac eros vulputate suscipit non in libero.
            </p>
            <p>
              In id justo euismod, pharetra felis at, pulvinar velit. In eget nisi
              lorem. Nam fringilla dui at elit sodales, a cursus mauris pharetra.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              non purus ac eros vulputate suscipit non in libero.
            </p>
            <p>
              In id justo euismod, pharetra felis at, pulvinar velit. In eget nisi
              lorem. Nam fringilla dui at elit sodales, a cursus mauris pharetra.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              non purus ac eros vulputate suscipit non in libero.
            </p>
            <p>
              In id justo euismod, pharetra felis at, pulvinar velit. In eget nisi
              lorem. Nam fringilla dui at elit sodales, a cursus mauris pharetra.
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
