// components/ContactUs.js
import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contactus-container">
      <h2 className="contactus-heading">Contact Us</h2>

      <div className="contactus-cards">
        {/* Dummy cards */}
        <div className="card">
          <h3>Card 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card">
          <h3>Card 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card">
          <h3>Card 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Smart India Hackathon. Team Akatsuki</p>
      </footer>
    </div>
  );
}

export default ContactUs;
