import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PictureSection.css';

function PicSection() {
  return (
    <div className="video-container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="pic-placeholder">
            <img
              src="https://img.freepik.com/free-photo/man-experiencing-virtual-reality-with-device_23-2148864941.jpg?t=st=1730104570~exp=1730108170~hmac=be1655c45f75f09afc3dac9693bd71d001c639217b69c0a6ab8ec0c7b4268b9f&w=1060"
              alt="Your Description"
              className="img-fluid"
            />
            <div className="overlay-content">
              <button className="cta-button">Join Today</button>
              <h3>We designed Bluemark Inc’s Physical Marketing B2B SaaS from scratch</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PicSection;
