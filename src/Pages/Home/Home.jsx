import React from 'react'
import Feature from '../../Components/Feature/Feature'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from '../../Components/Header/Header';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Faqs from '../../Components/Faqs/Faqs'
import Footer from '../../Components/Footer/Footer';
import Workflow from '../../Components/Workflow/Workflow'
import CustomerReviews from '../../Components/CustomerReviews/Reviews';
import WorkGallery from '../../Components/WorkGallery/Workgallery';
import Pricing from '../../Components/Pricing/Price';
import Imagejoin from '../../Pages/UIUXdesign/Imagejoin'
import Imagejoin1 from '../../Pages/UIUXdesign/Imagejoin1'
import Imagejoin2 from '../../Pages/UIUXdesign/Imagejoin2'
function Home() {
  return (
    <div>
     <Header/>
    <Feature/>
    <Imagejoin/>
    <Imagejoin1/>
    <Imagejoin2/>
    <Workflow/>
    <WorkGallery/>
    <Pricing/>
    <CustomerReviews/>
    <Faqs/>
    <Footer/>
    </div>
  )
}

export default Home