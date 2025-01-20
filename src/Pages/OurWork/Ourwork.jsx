import React from 'react'
import './Ourwork.css'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import FAQ from '../../Components/Faqs/Faqs';
import Pricing from '../../Components/Pricing/Price';
import { Link } from 'react-router-dom';


function WorkLibrary()  {
  return (
    <div className="work-library">
      <h2 className="title">Our Work Library</h2>
      <p className="description">
        We are a bunch of passionate Product Designers & Frontend engineers,
        working directly with cool tech companies across the globe as their on-the-go
        Product Design & Frontend Teams.
      </p>
      <div className="grid-container">
        <div className="grid-item">
          <div className="">
           <Link to={'/uiuxdesign'} style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}}> <img className='image-placeholder' src="UI-UX.webp" alt="" />
          <p > UI/UX Design</p></Link>
          </div>
        </div>
        <div className="grid-item">
          <div className="">
          <Link to={'/uiuxdesign'} style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}}>  <img className='image-placeholder' src="Frontend.webp" alt="" />
          <p>Frontend Development</p></Link>
          </div>
        </div>
        <div className="grid-item">
          <div className="">
           <Link to={'/flyers'} style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}}> <img className='image-placeholder' src="https://media.istockphoto.com/id/1458970567/vector/design-brochure-flyer-business-template.jpg?s=612x612&w=0&k=20&c=EaaIYuTaMiZR7msPUxsUET8ryvjmnkJlIQ9EdKQl3mo=" alt="" />
          <p>Logo & Flyer Design</p></Link>
          </div>
        </div>
        <div className="grid-item">
          <div className="">
           <Link to={'/social-media'} style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}}><img className='image-placeholder' src="https://cdn.pixabay.com/photo/2019/12/16/04/17/social-media-4698431_640.jpg" alt="" />
         <p>Digital Media Design</p></Link>
          </div>
        </div>
        <div className="grid-item">
          <div className="">
          <Link to={'/social-media'} style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}}><img className='image-placeholder' src="2D-3D.webp" alt="" />
          <p>2D & 3D Animation</p></Link>
          </div>
        </div>
        <div className="grid-item">
          <div className="">
            <Link to={'/social-media'} style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}}><img className='image-placeholder' src="DevOps.webp" alt="" />
            <p>DevOps</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};


function Ourworkpage() {
  return (
    <div>
        <Header/>
        <WorkLibrary/>
        <Pricing/>
        <FAQ/>
       <Footer/>
    </div>
  )
}

export default Ourworkpage