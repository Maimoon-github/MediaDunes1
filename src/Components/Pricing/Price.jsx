// PricingSection.jxs
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./Price.css";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="container pricing-container">
      <h2 className="pricing-title">Flat & Simple Monthly Pricing</h2>
      <p className="pricing-subtitle">
      No hidden charges, no recruitment costs—pay only for the work you need. Enjoy significant savings with our flat monthly pricing. Plus, every plan comes with a hassle-free 7-day money-back guarantee.      </p>
      {/* Responsive gap utilities for larger screens */}
      <div className="row row-cols-1 row-cols-lg-3 g-4 g-lg-5">
        {/* Card 1 */}
        <div className="col">
          <div className="pricing-card price-margin">
            <div className="card-header">Advance Design</div>
            <h3 className="card-title">Product Design, Your Way</h3>
            <p className="card-price">$3799/mo</p>
            <ul className="card-features">
              <li>Dedicated UI/UX Designer</li>
              <li>Multiple Projects</li>
              <li>Real-time Collaboration on Slack/ Google Meet
              </li>
              <li>Daily Updates</li>
              <li>Flexible Plans to Suit Your Needs
              </li>
            </ul>
           <Link to={'https://calendly.com/nida-ideal/call-with-media-dunes?month=2024-11'}> <button className="card-button">Book a Demo-call</button></Link>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col">
          <div className="pricing-card center-card">
            <div className="card-header">Advance Combo</div>
            <h3 className="card-title">Product Design & Frontend Engineering as a Service
            </h3>
            <p className="card-price">
              $6399/mo <span className="original-price">$7000</span>
            </p>
            <ul className="card-features">
              <li>Your own expert designer and frontend engineer
              </li>
              <li>Agile Development for Faster Time-to-Market
              </li>
              <li>Multiple Projects</li>
              <li>Real-time Collaboration on Slack/ Google Meet
              </li>
              <li>Daily Updates</li>
              <li>Flexible Plans to Suit Your Needs
              </li>
            </ul>
            <Link to={'https://calendly.com/nida-ideal/call-with-media-dunes?month=2024-11'}>   <button className="card-button">Book a Demo-call</button></Link>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col">
          <div className="pricing-card price-margin">
            <div className="card-header">Advance Frontend</div>
            <h3 className="card-title">Frontend Engineering as a Service
            </h3>
            <p className="card-price">$3799/mo</p>
            <ul className="card-features">
              <li>Agile Development for Faster Time-to-Market
              </li>
              <li>Multiple Projects</li>
              <li>Real-time Collaboration on Slack/ Google Meet
              </li>
              <li>Daily Updates</li>
              <li>Flexible Plans to Suit Your Needs
              </li>
            </ul>
            <Link to={'https://calendly.com/nida-ideal/call-with-media-dunes?month=2024-11'}>   <button className="card-button">Book a Demo-call</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;