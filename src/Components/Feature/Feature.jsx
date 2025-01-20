import React, { useRef, useState } from "react";
import "./Feature.css";
import { Link } from 'react-router-dom';
// import ShehranVideo from "../../Assets/Shehran.mp4";

const HeroSection = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(true); // State to track if the video is playing

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="hero-section text-center p-4">
      <div className="container">
        <h1 className="blue fw-bold">
          Creative Digital Solutions to Transform Your Brand
        </h1>
        <p className="feature-para">
          We specialize in Graphic Design, 3D Visualization, Photography, Videography, and Motion Graphics to elevate your business presence.
        </p>
        <div className="cta-buttons">
          <Link to={'/ourwork'}>
            <button className="call-btn mt-3">View Our Work</button>
          </Link>
          <Link to={'https://calendly.com/nida-ideal/call-with-media-dunes?month=2024-11'}>
            <button className="call-btn mt-3"> Get a Free Quote</button>
          </Link>
        </div>
        {/* Video Element with Custom Play Button */}
        <div className="video-placeholder my-5">
          <video
            ref={videoRef}
            src="Shehran.mp4"
            className="video"
            autoPlay
            muted
            loop
            onClick={handlePlayPause}
          ></video>
          {!isPlaying && (
            <div className="play-button" onClick={handlePlayPause}>
              <i className="bi bi-play-circle-fill"></i>
            </div>
          )}
        </div>

        <p className="video-para">
        Our unique approach has allowed us to collaborate with a diverse range of tech companies, providing them with on-demand product design and frontend engineering expertise.

        </p>
      </div>
    </section>
  );
};

export default HeroSection;
