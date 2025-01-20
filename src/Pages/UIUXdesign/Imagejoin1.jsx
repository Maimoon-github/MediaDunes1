import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "./Imagejoin.css";
import "animate.css";
// import { Link } from "react-router-dom";

const JoinToday = () => {
  const containerRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Animation logic
  useEffect(() => {
    const handleMouseEnter = () => {
      if (containerRef.current) {
        containerRef.current.querySelector(".join-texxt-container").classList.add("animate__fadeInLeft");
        containerRef.current.querySelector(".image-section").classList.add("animate__fadeInRight");
      }
    };

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.querySelector(".join-texxt-container").classList.remove("animate__fadeInLeft");
        containerRef.current.querySelector(".image-section").classList.remove("animate__fadeInRight");
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current.addEventListener("mouseenter", handleMouseEnter);
          containerRef.current.addEventListener("mouseleave", handleMouseLeave);
        } else {
          containerRef.current.removeEventListener("mouseenter", handleMouseEnter);
          containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
        containerRef.current.removeEventListener("mouseenter", handleMouseEnter);
        containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Modal Content
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div ref={containerRef} className="joine-container container">
      <div className="join-texxt-container animate__animated">
        <button className="cntcts-btn" onClick={openModal}>
          Learn more
        </button>
        <h1 className="joining-text">
        We developed this web application for Pakistan Auction, providing a complete auction management system, from UI/UX design to final project delivery.

        </h1>
      </div>
      <div className="image-section animate__animated">
        <img
          src="Auction-our-work.webp" // Replace with your image URL
          alt="Bluemark SaaS"
          className="section-image"
        />
      </div>

      {/* Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal-content" overlayClassName="modal-overlay">
        <button className="close-btn" onClick={closeModal}>×</button>
        <h2 className="modal-title">Request a Case Study</h2>
        <form className="modal-form">
          <label>
            Full Name *
            <input type="text" placeholder="Enter your full name" required />
          </label>
          <label>
            Email *
            <input type="email" placeholder="Enter your work email" required />
          </label>
          <label>
            Phone Number *
            <input type="tel" placeholder="(201) 555-0123" required/>
          </label>
          <label>
            Job Title *
            <input type="text" placeholder="Enter your job title" required />
          </label>
          <label>
            Company Name *
            <input type="text" placeholder="Enter your company name" required />
          </label>
          <button type="submit" className="submit-btn">Request a Case Study</button>
        </form>
      </Modal>
    </div>
  );
};

export default JoinToday;
