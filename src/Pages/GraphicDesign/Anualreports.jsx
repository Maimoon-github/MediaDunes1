import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Flyers.css'
// import Images from "./Images"
import { Link } from 'react-router-dom';

import  Anual1 from '../../Assets/AnualReports/Annual Report-1.webp'
import  Anual2 from '../../Assets/AnualReports/Annual Report-2.webp'
import  Anual3 from '../../Assets/AnualReports/Annual Report-3.webp'
import  Anual4 from '../../Assets/AnualReports/Annual Report-4.webp'
import  Anual5 from '../../Assets/AnualReports/Annual Report-5.webp'

// import  Logo9 from '../../Assets/Logos/Logo-9.webp'

const images = [
  
  Anual5,
  Anual3,
  Anual1,
  Anual2,
  Anual4,
  Anual3,
  'https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21193859/DQ.png',
  'https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/04/attachment_93742997-e1554228382773.png?auto=format&q=60&fit=max&w=930',
  Anual3,
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-food-business-chef-logo-design-template-c961160a5a1854c78d5e0944eb95710c_screen.jpg?ts=1700933457',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-logo-restaurant-logo-design-template-cc731b4f2a5005f5716bec573cbeaf1d_screen.jpg?ts=1708326033',
   
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
      <h2 className="graphic-title">Annual Reports</h2>
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
