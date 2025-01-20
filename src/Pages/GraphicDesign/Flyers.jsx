import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Flyers.css'
// import Images from "./Images"
import { Link } from 'react-router-dom';

import Flyer1 from '../../Assets/Flyers/Flyer-1.webp'
import Flyer2 from '../../Assets/Flyers/Flyer-2.webp'
import Flyer3 from '../../Assets/Flyers/Flyer-3.webp'
import Flyer4 from '../../Assets/Flyers/Flyer-4.webp'
import Flyer5 from '../../Assets/Flyers/Flyer-5.webp'
import Flyer6 from '../../Assets/Flyers/Flyer-6.webp'
import Flyer7 from '../../Assets/Flyers/Flyer-7.webp'
import Flyer8 from '../../Assets/Flyers/Flyer-8.webp'
import Flyer9 from '../../Assets/Flyers/Flyer-9.webp'

const images = [
  Flyer8,
  Flyer7,
  Flyer5,
  Flyer3,
  Flyer1,
  Flyer2,
  Flyer4,
  Flyer6,
  Flyer9,
  Flyer3,
  'https://www.befunky.com/images/wp/wp-2021-11-event-flyers-featured-image.jpg?auto=avif,webp&format=jpg&width=1200&crop=16:9',
  'https://www.transformationmarketing.com/wp-content/uploads/2019/10/TM-Basics-to-making-a-flyer.jpg',
  Flyer3,
  'https://www.printingplusny.com/wp-content/uploads/2023/05/Flyer.jpg',
  'https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/business-solutions-flyer-template-2irxvt4f9a0fe6.webp',
  'https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_party-flyers-17b45d39641bd2651a8d1840412cd3ee.jpg?ts%20=%201706132263',
  'https://copycatjm.com/wp-content/uploads/2017/05/Product-Image-Flyer_23-2.jpg',
  'https://capriprinters.co.za/wp-content/uploads/2023/05/A6-Flyers-Printing-Capri-Printers-800x800.png',
  
];

const ImageGrids = () => {
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



const FlyersPage = () => {
  return (
    <div>
      <Header />
      <div className="graphic-design-section text-center">
      <h2 className="graphic-title">Flyers</h2>
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
        <ImageGrids/>
      </div>
      <Footer />
    </div>
  );
};

export default FlyersPage;
