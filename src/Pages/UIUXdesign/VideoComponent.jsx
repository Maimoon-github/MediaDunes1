import React, { useRef, useState } from "react";
import "./VideoComponent.css";
// import { Link } from 'react-router-dom';
import ImageJoin from './Imagejoin'
import ImageJoin1 from './Imagejoin1'
import ImageJoin2 from './Imagejoin2'
import ImageJoin3 from './Imagejoin3'
const HeroSection = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing

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
        UI/UX Design & Front End Development
        </h1>
      
      
        {/* Video Element with Custom Play Button */}
        <div className="video-placeholder my-5">
          <video
            ref={videoRef}
            src='Shehran.mp4'
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
          From Y Combinator startups to global enterprise FMCGs, our innovative
          model has allowed us to collaborate with cutting-edge tech companies
          worldwide, serving as their dedicated, on-demand product design and
          front-end team.
        </p>

        <ImageJoin/>
        <ImageJoin1/>
        <ImageJoin2/>
        <ImageJoin3/>

      </div>
    </section>
  );
};

export default HeroSection;
