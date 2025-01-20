import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Flyers.css'
import { Link } from 'react-router-dom';

// import Images from "./Images"
import  post1 from '../../Assets/SocialMedia/Post-1.webp'
import  post0 from '../../Assets/SocialMedia/Post-0.webp'
import  post2 from '../../Assets/SocialMedia/Post-2.webp'
import  post3 from '../../Assets/SocialMedia/Post-3.webp'
import  post4 from '../../Assets/SocialMedia/Post-4.webp'
import  post5 from '../../Assets/SocialMedia/Post-5.webp'
import  post6 from '../../Assets/SocialMedia/Post-6.webp'
import  post7 from '../../Assets/SocialMedia/Post-7.webp'
import  post8 from '../../Assets/SocialMedia/Post-8.webp'
import  post9 from '../../Assets/SocialMedia/Post-9.webp'
import  post10 from '../../Assets/SocialMedia/Post-10.webp'
import  post11 from '../../Assets/SocialMedia/Post-11.webp'
import  post12 from '../../Assets/SocialMedia/Post-12.webp'
import  post13 from '../../Assets/SocialMedia/Post-13.webp'
import  post14 from '../../Assets/SocialMedia/Post-14.webp'
import  post15 from '../../Assets/SocialMedia/Post-15.webp'
import  post16 from '../../Assets/SocialMedia/Post-16.webp'
import  post17 from '../../Assets/SocialMedia/Post-17.webp'
// import  Logo9 from '../../Assets/Logos/Logo-9.webp'

const images = [
    post0,
    post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
  post11,
  post12,
  post13,
  post14,
  post15,
  post16,
  post17,
  
   
];

const AnualGrids = () => {
  return (
    <div className="container my-4">
      <div className="row flyerrow">
        {images.map((image, index) => (
          <div className="col-6 col-md-3 mb-4 flyerimage " key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="custom-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};



const AnualReports = () => {
  return (
    <div>
      <Header />
      <div className="graphic-design-section text-center">
      <h2 className="graphic-title">Social Media</h2>
  <div className="nav-Tabs">
    <Link to="/graphic" className="nav-tab">All</Link>
    <Link to="/logos" className="nav-tab">Logos</Link>
    <Link to="/flyers" className="nav-tab">Flyers</Link>
    <Link to="/anual-reports" className="nav-tab">Annual Reports</Link>
    <Link to="/social-media" className="nav-tab">Social Media</Link>
    <Link to="/graphic" className="nav-tab">Others</Link>
  </div>
  </div>
      <div className="graphic-design-section text-center">
        
        <p className='graphic-description'>From Y Combinator startups to global enterprise FMCGs, our innovative model has allowed us to collaborate
          with cutting-edge tech companies worldwide, serving as their dedicated, on-demand product design and
          front-end team..</p>
        <AnualGrids/>
      </div>
      <Footer />
    </div>
  );
};

export default AnualReports;
