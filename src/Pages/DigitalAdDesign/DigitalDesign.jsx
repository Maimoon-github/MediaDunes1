import React from 'react'
import Header from '../../Components/Header/Header'
import Costeffective from '../PrintDesign/Costeffective'
import FaqDigitalad from './Faq-Digital-ad'
import './DigitalDesign.css'
import PriceCard from '../../Components/PriceCard/PriceCard'
import ContactUs from '../../Components/ContactCard/ContactCard'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";

function DigitalDesign() {
  return (
    <div>
        <Header/>
        <section className="Digitaldesign-hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          {/* Text Section */}
          <div className="col-lg-6 col-md-12 text-section">
            <h1 className="hero-title">Digital Ad Design</h1>
            <p className="hero-description">
            Amplify your online reach with Media Dunes' custom digital ad designs. Our team of skilled designers produces captivating ads that stand out on any platform. We ensure each design reflects your brand's essence and marketing objectives, driving engagement and conversions.
            </p>
            <div className="hero-buttons">
             <Link to={'/contactus'}><button className="btn btn-blue me-3">Contact us</button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>

     {/* Digital AD design workflow  design workflow */}
     <div className="design-workflow-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6">
            <h6 className="subheading">Built for Marketers & Creatives</h6>
            <h2 className="title">From concept to completion and all the testing in between</h2>
          </div>
          {/* Right Section */}
          <div className="col-md-6">
            <p className="description">
            As the demand for fresh ad creative continues to rise, marketing teams require a steady flow of innovative designs to test diverse channels, optimize ad performance, synchronize campaigns across multiple platforms, and refresh outdated digital ads to keep audiences engaged. Media Dunes simplifies this process by offering a dedicated design team that thoroughly understands your brand and business objectives. Through our intuitive platform, your team can seamlessly submit and manage design requests, enabling efficient creative collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>


     {/* Infographic design and admin assistant service */}
     <div className="assistance-services-section">
      <div className="container">
        <h2 className="section-title text-center">Digital Ad Creative Services</h2>
        <div className="row text-center mt-5">
          {/* Service Card 1 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://kinsta.com/wp-content/uploads/2020/05/examples-of-banner-advertisements-1-1.png" className="graphic-placeholder" alt="" />
              </div>
              <h5 className="service-title mt-3">Banner Ads</h5>
              <p className="service-description">
              Crafting visually striking banner ads with Media Dunes can significantly boost click-through rates and conversions. Our expertly designed ads are optimized to captivate attention, stand out on web pages, and drive targeted traffic to your landing pages.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCNj2oVs1nqOjvji2QrykgbdLW84zzXF7Kw&s" alt="" className="graphic-placeholder" />
              </div>
              <h5 className="service-title mt-3">Social Media Ads</h5>
              <p className="service-description">
              Craft compelling social media advertisements that captivate audiences and foster interaction. By strategically designing effective social media ads, Media Dunes can significantly enhance brand visibility and stimulate higher engagement rates
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxzmJEVW4IC8qVG2JYdBwalECZeU1Gb9rDw&s" alt="" className="graphic-placeholder" />
              </div>
              <h5 className="service-title mt-3">Display Ads</h5>
              <p className="service-description">
              Craft eye-catching display ads that effectively communicate your message with Media Dunes. By leveraging high-quality display advertising, you can significantly elevate your online advertising campaigns and drive impactful results. 
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-4">
          <Link to={'/ourwork'}><button className="btn btn-outline-primary">View More Services</button></Link>
        </div>
      </div>
    </div>

    <Costeffective/>
    <div className="text-center mt-4">
         <Link to={'https://calendly.com/nida-ideal/call-with-media-dunes?month=2024-11'}><button className="btn btn-blue primary">Book a Demo Call</button></Link>
        </div>   
        

    {/* Diigtal-ad-design-assisatance-service-para */}
<div className="assistance-service-container d-flex justify-content-center align-items-center">
      <div className="assistance-service-card p-4 ">
        {/* <h5 className="text-uppercase text-light mb-3">Why Media Dunes</h5> */}
        <h2 className="text-white mb-3">
        Why Media Dunes?
        </h2>
        <p className="text-light">
        Media Dunes sets itself apart with our Digital Ad Design service, offering personalized attention, deep brand understanding, and a smooth collaborative process. Our dedicated design team works closely with you to ensure each ad resonates with your brand’s voice and goals. Our user-friendly platform streamlines design requests, guaranteeing quick turnaround times and exceptional quality. Unlike other services, we provide unlimited design revisions, ensuring your complete satisfaction. With Media Dunes, you’ll receive customized, impactful, and captivating digital ads that deliver results.
        </p>
      </div>
    </div>

    {/* FAQS */}
    <FaqDigitalad/>

    {/* other */}
 {/* Printdesign workflow  design workflow */}
 <div className="design-workflow-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6">
            <h6 className="subheading">Other services</h6>
            <h3 className="title">All your graphic design requirements all in one place</h3>
          </div>
          {/* Right Section */}
          <div className="col-md-6">
            <p className="description">
            At Hatchly, we offer a comprehensive suite of graphic design services tailored to meet all your creative needs. From eye-catching social media graphics and professional presentation designs to custom illustrations and impactful digital ads, our team of expert designers are here to support every aspect of your visual communication strategy
            </p>
            <button className='btn btn-price'>See Pricing Plans</button>
          </div>
        </div>
      </div>
    </div>

    {/* Infographic design and admin assistant service */}
    <div className="assistance-services-section">
      <div className="container">
        <div className="row text-center mt-5">
          {/* Service Card 1 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://www.accesscorp.com/wp-content/uploads/2020/03/iStock-1133511685.jpg" className="graphic-placeholder" alt="" />
              </div>
              <h5 className="service-title mt-3">Social Media Design</h5>
              <p className="service-description">
              Boost your social media presence with our tailored social media design services. Our team creates eye-catching graphics that align with your brand and engage your audience. From posts to stories, we design content that enhances your social media strategy and drives interaction.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://kazokku.com/blog/wp-content/uploads/2024/03/Quality-Assurance-vs-Quality-Control.webp" alt="" className="graphic-placeholder" />
              </div>
              <h5 className="service-title mt-3">Print Design</h5>
              <p className="service-description">
              Bring your brand to life with our high-quality print design services. We produce visually stunning materials, from brochures and flyers to posters and business cards. Our print designs are crafted to leave a lasting impression and effectively communicate your brand’s message.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/12/17114426/eprs-aag-542142-open-method-of-coordination.png" alt="" className="graphic-placeholder" />
              </div>
              <h5 className="service-title mt-3">Infographic Design</h5>
              <p className="service-description">
              Elevate your information presentation with our expert infographic design services. We create visually compelling infographics that simplify complex data, making it easily digestible and highly engaging. Our designs are tailored to captivate your audience, ensuring your key messages are conveyed clearly and effectively. Transform your data into stunning visual narratives that stand out and make an impact.
              </p>
            </div>
          </div>
        </div>
        </div>
        </div>

        <PriceCard/>
        <ContactUs/>
        <Footer/>
 </div>
  )
}

export default DigitalDesign