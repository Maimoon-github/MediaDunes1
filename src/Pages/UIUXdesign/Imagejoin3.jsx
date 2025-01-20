import React, { useEffect, useRef } from "react";
import "./Imagejoin.css";
import "animate.css";
import { Link } from "react-router-dom";

const JoinToday = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      // Add animation classes when the cursor is near
      if (containerRef.current) {
        containerRef.current.querySelector(".join-texxt-container").classList.add("animate__fadeInLeft");
        containerRef.current.querySelector(".image-section").classList.add("animate__fadeInRight");
      }
    };

    const handleMouseLeave = () => {
      // Remove animation classes to allow re-trigger
      if (containerRef.current) {
        containerRef.current.querySelector(".join-texxt-container").classList.remove("animate__fadeInLeft");
        containerRef.current.querySelector(".image-section").classList.remove("animate__fadeInRight");
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add event listeners when the container is in view
          containerRef.current.addEventListener("mouseenter", handleMouseEnter);
          containerRef.current.addEventListener("mouseleave", handleMouseLeave);
        } else {
          // Remove event listeners when the container is out of view
          containerRef.current.removeEventListener("mouseenter", handleMouseEnter);
          containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the container is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
        containerRef.current.removeEventListener("mouseenter", handleMouseEnter);
        containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="joine-container">
      <div className="join-texxt-container animate__animated">
        <Link to={"https://calendly.com/nida-ideal/call-with-media-dunes?month=2024-11"}>
          <button className="cntcts-btn">Learn more</button>
        </Link>
        <h1 className="joining-text">
          We designed Bluemark Inc’s Physical Marketing B2B SaaS from scratch
        </h1>
      </div>
      <div className="image-section animate__animated">
        <img
          src="Site-State-our-work.webp" // Replace with your image URL
          alt="Bluemark SaaS"
          className="section-image"
        />
      </div>
    </div>
  );
};

export default JoinToday;
