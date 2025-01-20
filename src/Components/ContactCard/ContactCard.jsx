// Importing required libraries
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactCard.css'; // Custom CSS file
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
<>
<div >
      {/* Promo Banner */}
        <div className="contact-us-container">
          <p className="promo-title"><b>Get 50% off your first month with us at Media Dunes </b> <br />
          Experience a one-month trial to understand the value we offer</p>
       <Link to={'https://calendly.com/nida-ideal/call-with-media-dunes?month=2024-11'}><button className="btn btn-primary promo-btn">Book a Demo</button></Link>
        </div>
      </div>
     
      <section className="contact-us-section">
      <div className="contactcontainer">
        {/* Headings */}
        <h3 className="contact-heading">Contact Us</h3>
        <h2 className="contact-subheading">Tell us about your creative needs</h2>
        <p className="contact-description">
          We can then come back to you about how our plug & play solution works, how we outperform agencies & freelancers, and which subscription would best suit your requirements.
        </p>

        {/* Contact Form */}
{/* Contact Form */}
<form
  className="contact-form"
  onSubmit={(e) => {
    e.preventDefault(); // Prevent default form submission
    const fullName = document.getElementById("fullName").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Use a mailto link to send the data
    window.location.href = `mailto:info@mediadunes.com?subject=Contact Form Submission&body=Full Name: ${fullName}%0D%0AJob Title: ${jobTitle}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
  }}
>
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="fullName">Full Name *</label>
      <input
        type="text"
        id="fullName"
        className="form-control"
        placeholder="Enter your full name"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="jobTitle">Job Title *</label>
      <input
        type="text"
        id="jobTitle"
        className="form-control"
        placeholder="Enter your job title"
        required
      />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email *</label>
    <input
      type="email"
      id="email"
      className="form-control"
      placeholder="Enter your work email"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea
      id="message"
      className="form-control"
      placeholder="Simply tell us about your requirements or ask any question(s) about our services"
      rows="7"
    ></textarea>
  </div>
  <button type="submit" className="submit-button">
    Submit your Message →
  </button>
</form>

      </div>
    </section>

      
    
    </>
  );
};

export default ContactUs;
