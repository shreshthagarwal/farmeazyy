// components/AboutUs.js
import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/aboutus-right.png'; // About Us specific image

function AboutUs() {
  return (
    <div className="aboutus-container">
      <h2 className="aboutus-heading">About Us</h2>
      <div className="aboutus-content-container">
        <div className="aboutus-textbox">
          <div className="aboutus-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vehicula, nisi at viverra gravida, erat sapien dictum risus, at
              malesuada risus odio a justo. Integer fermentum imperdiet orci, id
              cursus est tempor eget.
            </p>
            <p>
              Curabitur quis turpis vestibulum, elementum dui eget, laoreet orci. Etiam
              convallis lorem sit amet sem interdum, at fermentum nisi vulputate.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vehicula, nisi at viverra gravida, erat sapien dictum risus, at
              malesuada risus odio a justo. Integer fermentum imperdiet orci, id
              cursus est tempor eget.
            </p>
            <p>
              Curabitur quis turpis vestibulum, elementum dui eget, laoreet orci. Etiam
              convallis lorem sit amet sem interdum, at fermentum nisi vulputate.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vehicula, nisi at viverra gravida, erat sapien dictum risus, at
              malesuada risus odio a justo. Integer fermentum imperdiet orci, id
              cursus est tempor eget.
            </p>
            <p>
              Curabitur quis turpis vestibulum, elementum dui eget, laoreet orci. Etiam
              convallis lorem sit amet sem interdum, at fermentum nisi vulputate.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
        <div className="aboutus-image">
          <img src={aboutImage} alt="About Us" />
        </div>
        
      </div>
    </div>
  );
}

export default AboutUs;
