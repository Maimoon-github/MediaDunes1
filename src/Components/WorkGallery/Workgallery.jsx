import React, { useState, useEffect } from "react";
import "./Workgallery.css";
import "animate.css";
import { Link } from "react-router-dom";

const WorkGallery = ({ bgColor }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check screen width and update state
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    updateScreenSize(); // Initial check
    window.addEventListener("resize", updateScreenSize);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const galleryItems = [
    { src: "UI-UX.webp", alt: "UI UX Design", text: "UI UX Design", link: "/uiuxdesign" },
    { src: "Frontend.webp", alt: "Frontend", text: "Frontend", link: "/uiuxdesign" },
    { src: "2D-3D.webp", alt: "2D & 3D Animation", text: "2D & 3D Animation", link: "/uiuxdesign" },
    { src: "DevOps.webp", alt: "DevOps", text: "DevOps", link: "/devops" },
    { src: "https://cdn.pixabay.com/photo/2019/12/16/04/17/social-media-4698431_640.jpg", alt: "Digital Media Design", text: "Digital Media Design", link: "/social-media" },
    { src: "https://media.istockphoto.com/id/1458970567/vector/design-brochure-flyer-business-template.jpg?s=612x612&w=0&k=20&c=EaaIYuTaMiZR7msPUxsUET8ryvjmnkJlIQ9EdKQl3mo=", alt: "Logo & Flyer Design", text: "Logo & Flyer Design", link: "/flyers" },
  ];

  return (
    <div className="work-gallery" style={{ backgroundColor: bgColor }}>
      <h2 className="gallery-title">Work Gallery</h2>
      <div className="gallery-marquee">
        <div className="gallery-container">
          {galleryItems?.map((item, index) => (
            <div className="gallery-item" key={index}>
              <Link to={item.link} style={{ textDecoration: "none" }}>
                <img src={item?.src} alt={item?.alt} />
                <p>{item?.text}</p>
              </Link>
            </div>
          ))}
          {!isSmallScreen &&
            galleryItems?.map((item, index) => (
              <div className="gallery-item" key={`dup-${index}`}>
                <Link to={item.link} style={{ textDecoration: "none" }}>
                  <img src={item?.src} alt={item?.alt} />
                  <p>{item?.text}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WorkGallery;
