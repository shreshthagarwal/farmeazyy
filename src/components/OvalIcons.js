// components/OvalIcons.js
import React from 'react';
import './OvalIcons.css';
import ovalImage from '../assets/industry-oval.png';
import buyIcon from '../assets/industry-buy.png';
import sellIcon from '../assets/industry-sell.png';
import printIcon from '../assets/industry-list.png';
import divider from "../assets/industry-divider.png";

function OvalIcons({ scrollToSection, buyRef, sellRef, listedRef }) {
  return (
    <div className="oval-icons-container">
      <img src={ovalImage} alt="Oval Background" className="oval-background" />
      <div className="icons">
        {/* Add onClick handlers to scroll to respective sections */}
        <img src={buyIcon} alt="Buy" className="icon12" onClick={() => scrollToSection(buyRef)} />
        <img src={divider} alt="Divider" className="icon21" />
        <img src={printIcon} alt="Listed" className="icon12" onClick={() => scrollToSection(listedRef)} />
        <img src={divider} alt="Divider" className="icon21" />
        <img src={sellIcon} alt="Sell" className="icon12" onClick={() => scrollToSection(sellRef)} />
      </div>
    </div>
  );
}

export default OvalIcons;
