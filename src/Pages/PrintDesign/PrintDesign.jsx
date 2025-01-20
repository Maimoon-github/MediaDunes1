import React from 'react'
import Header from '../../Components/Header/Header'
import Costeffective from './Costeffective'
import './PrintDesign.css'
import GraphicAssistanceFAQ from '../Graphic-AA/Faq'
import PriceCard from '../../Components/PriceCard/PriceCard'
import ContactCard from '../../Components/ContactCard/ContactCard'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";

function PrintDesign() {
  return (
    <div>
        <Header/>

        <section className="Printdesign-hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          {/* Text Section */}
          <div className="col-lg-6 col-md-12 text-section">
            <h1 className="hero-title">Print Design</h1>
            <p className="hero-description">
            Bring your brand to life with our high-quality print design services. We produce visually stunning materials, from brochures and flyers to posters and business cards. Our print designs are crafted to leave a lasting impression and effectively communicate your brand’s message.
            </p>
            <div className="hero-buttons">
             <Link to={'/contactus'}><button className="btn btn-blue me-3">Contact us</button></Link>
              <Link to={'/price'}><button className="btn btn-outline-secondary">
                See pricing plans
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Printdesign workflow  design workflow */}
    <div className="design-workflow-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6">
            <h6 className="subheading">From Concept to Print-Ready</h6>
            <h2 className="title">Print Designs that Leave a Lasting Impression</h2>
          </div>
          {/* Right Section */}
          <div className="col-md-6">
            <p className="description">
            Print design encompasses the creation of visually appealing and effective materials for physical distribution. This service is essential for producing high-quality brochures, posters, business cards, and other print media that convey your brand’s message clearly and professionally. Well-designed print materials can enhance brand perception and ensure that your communications stand out in a tangible way.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Infographic design and admin assistant service */}
    <div className="assistance-services-section">
      <div className="container">
        <h2 className="section-title text-center">Print Design Creative Services</h2>
        <div className="row text-center mt-5">
          {/* Service Card 1 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://www.accesscorp.com/wp-content/uploads/2020/03/iStock-1133511685.jpg" className="graphic-placeholder" alt="" />
              </div>
              <h5 className="service-title mt-3">Business Cards</h5>
              <p className="service-description">
              Design professional business cards that make a lasting impression. A well-designed business card reflects your brand identity and helps you stand out in networking situations.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://kazokku.com/blog/wp-content/uploads/2024/03/Quality-Assurance-vs-Quality-Control.webp" alt="" className="graphic-placeholder" />
              </div>
              <h5 className="service-title mt-3">Brochures</h5>
              <p className="service-description">
              Create informative and visually appealing brochures that effectively communicate your products or services. High-quality brochure design can attract potential customers and provide them with valuable information.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/12/17114426/eprs-aag-542142-open-method-of-coordination.png" alt="" className="graphic-placeholder" />
              </div>
              <h5 className="service-title mt-3">Event Collateral</h5>
              <p className="service-description">
              Design cohesive and visually striking event collateral, including banners, flyers, and signage. Well-designed event materials ensure a memorable and professional presence at any event, enhancing attendee experience and engagement.    
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-4">
        <Link to={'/price'}><button className="btn btn-outline-primary">See pricing plans</button></Link>
        </div>
      </div>
    </div>

    <Costeffective/>


    {/* Print-assisatance-service-para */}
<div className="assistance-service-container d-flex justify-content-center align-items-center">
      <div className="assistance-service-card p-4 ">
        <h5 className="text-uppercase text-light mb-3">Why Media Dunes</h5>
        <h2 className="text-white mb-3">
          What makes our Infographic Design Admin & Assistance service different?
        </h2>
        <p className="text-light">
          Our Infographic design admin and assistance services streamline your
          workflow by providing comprehensive support for all design tasks. From
          file management to quality checks and project coordination, our team
          ensures that your design projects are executed efficiently and to the
          highest standards, allowing you to focus on creativity.
        </p>
      </div>
    </div>

    <GraphicAssistanceFAQ/>
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
            <Link to={'/price'}><button className='btn btn-price'>See Pricing Plans</button></Link>
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
        <ContactCard/>
        <Footer/>
    </div>
  )
}

export default PrintDesign