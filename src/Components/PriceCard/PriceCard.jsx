import React from 'react'
import './PriceCard.css'
import { FaCheckCircle } from "react-icons/fa"; // Import Font Awesome Icon
import { Link } from "react-router-dom";

function PriceCard() {
  return (
    <div><section className="pricing-section">
    <div className="container text-center">
      {/* Offer Banner */}
      <p className="offer-banner">Offer: 50% OFF Your First Month</p>

      {/* Headings */}
      <h2 className="pricing-title">Flexible and Scalable</h2>
      <p className="pricing-subtitle">Fixed Pricing to Suit All</p>
      <p className="pricing-description">
        We believe in a fair and transparent pricing model - always know what you'll pay. No hidden costs. One flat-fee.
      </p>

      {/* Pricing Cards */}
      <div className="row mt-5">
        {/* Standard Plan */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="pricing-card standard-plan">
            <p className="btn slots-limited">Slots limited</p>
            <h3 className="plan-name">Standard</h3>
            <h2 className="plan-price">
              $1999<span>/per month</span>
            </h2>
            <p className="payment-info">Paid Quarterly*</p>
            <p className="plan-description">
              Suited to all types of in-house teams that need help with more basic design.
            </p>
            <ul className="plan-features">
              <li><FaCheckCircle className="tick-icon" /> Unlimited Requests & Revisions</li>
              <li><FaCheckCircle className="tick-icon" /> Dedicated Designer</li>
              <li><FaCheckCircle className="tick-icon" /> Dedicated Account Manager</li>
              <li><FaCheckCircle className="tick-icon" /> Dedicated Creative Director</li>
              <li><FaCheckCircle className="tick-icon" /> Quality Assured Designs</li>
              <li><FaCheckCircle className="tick-icon" /> One Brand/Client</li>
            </ul>
            <Link to={'https://calendly.com/nida-ideal/call-with-media-dunes?month=2024-11'}><button className="choose-plan-btn">Choose Plan</button></Link>
            <p className="or-call">or Book a Call</p>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="pricing-card pro-plan">
            <p className="btn slots-limited">Slots limited</p>
            <h3 className="plan-name">Pro</h3>
            <h2 className="plan-price">
              $3999<span>/per month</span>
            </h2>
            <p className="payment-info">Paid Quarterly*</p>
            <p className="plan-description">
              Suited to all types of in-house teams that need help with more complex design for more than one client/brand.
            </p>
            <ul className="plan-features">
              <li><FaCheckCircle className="tick-icon" /> Unlimited Requests & Revisions</li>
              <li><FaCheckCircle className="tick-icon" /> Dedicated Designer</li>
              <li><FaCheckCircle className="tick-icon" /> Dedicated Account Manager</li>
              <li><FaCheckCircle className="tick-icon" /> Dedicated Creative Director</li>
              <li><FaCheckCircle className="tick-icon" /> Quality Assured Designs</li>
              <li><FaCheckCircle className="tick-icon" /> Unlimited Brands/Clients</li>
            </ul>
            <Link to={'https://calendly.com/nida-ideal/call-with-media-dunes?month=2024-11'}><button className="choose-plan-btn probtn">Choose Plan</button></Link>
            <p className="or-call">or Book a Call</p>
          </div>
        </div>

        {/* Standard Plus Plan */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="pricing-card standard-plus-plan">
            <p className="slots-limited">Slots limited</p>
            <h3 className="plan-name">Standard Plus</h3>
            <h2 className="plan-price">
              $1999<span>/per month</span>
            </h2>
            <p className="payment-info">Paid Quarterly*</p>
            <p className="plan-description">
              Suited to all types of in-house teams that need help with more basic design.
            </p>
            <ul className="plan-features">
              <li><FaCheckCircle className="tick-icon" /> Unlimited Requests & Revisions</li>
              <li><FaCheckCircle className="tick-icon" /> Dedicated Designer</li>
              <li><FaCheckCircle className="tick-icon" /> Dedicated Account Manager</li>
              <li><FaCheckCircle className="tick-icon" /> Dedicated Creative Director</li>
              <li><FaCheckCircle className="tick-icon" /> Quality Assured Designs</li>
              <li><FaCheckCircle className="tick-icon" /> One Brand/Client</li>
            </ul>
            <Link to={'https://calendly.com/nida-ideal/call-with-media-dunes?month=2024-11'}><button className="choose-plan-btn">Choose Plan</button></Link>
            <p className="or-call">or Book a Call</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default PriceCard