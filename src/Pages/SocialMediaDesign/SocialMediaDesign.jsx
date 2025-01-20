import React from 'react'
import './SocialMediaDesign.css'
import Header from '../../Components/Header/Header'
import Costeffective from '../PrintDesign/Costeffective'
import FAQ from '../../Components/Faqs/Faqs'
import PriceCard from '../../Components/PriceCard/PriceCard'
import ContactUs from '../../Components/ContactCard/ContactCard'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom';
function SocialMediaDesign() {
  return (
    <div>
        <Header/> 
        <section className="Social-Media-Design-hero d-flex align-items-center">
      <div className="container ">
       
          {/* Text Section */}
          <div className="col-lg-5 text-section ">
            <h1 className="hero-title text-white">Social Media Design</h1>
            <p className="hero-description text-white">
            Maximize your social media impact with Media Dunes' tailored design services. Our team delivers compelling graphics that align with your brand's unique identity and inspire audience interaction. From attention-grabbing posts to immersive stories, we create content that elevates your social media strategy.
            </p>
            <div className="hero-buttons">
             <Link to={'/contactus'}> <button className="btn btn-blue me-3">Contact us</button></Link>
            </div>
          </div>
      </div>
    </section>

 {/* Concept Creation workflow  design workflow */}
 <div className="design-workflow-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6">
            <h6 className="subheading">Tailored for Maximum Engagement</h6>
            <h2 className="title">Engaging Designs for Every Social Platform</h2>
          </div>
          {/* Right Section */}
          <div className="col-md-6">
            <p className="description">
            Social media design is essential for creating visually striking content that captures attention and drives engagement on various platforms. This service includes designing posts, stories, and ads that are optimized for each social media channel’s specifications and audience preferences. Effective social media design can increase brand awareness, foster community interaction, and boost your online presence.
            </p>
          </div>
        </div>
      </div>
    </div>
    
     {/* Concept creation and admin assistant service */}
     <div className="assistance-services-section">
      <div className="container">
        <h2 className="section-title text-center">Social Media Design Creative Services</h2>
        <div className="row text-center mt-5">
          {/* Service Card 1 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://marketplace.canva.com/EAF-43gIi8Q/1/0/1600w/canva-brown-photo-collage-instagram-post-IYa0cBCMyH8.jpg" className="graphic-placeholder" alt="" />
              </div>
              <h5 className="service-title mt-3">Instagram Posts</h5>
              <p className="service-description">
              Craft captivating Instagram posts that grab attention and spark engagement. These posts are optimized for the platform's visual nature and can help you grow your following and increase interaction.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/8251604/cover_image/regular_1708x683/Untitled-b91bdf8e478c7dbafa86afd20f3b519a.png" alt="" className="graphic-placeholder" />
              </div>
              <h5 className="service-title mt-3">Media Dunes
              Facebook Ads</h5>
              <p className="service-description">
              Design ads that truly resonate. Our team specializes in creating high-impact Facebook ads that drive results.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqrt4BUfsv0IbLw-pSboUqU3PPHbvBnJ-Sw&s" alt="" className="graphic-placeholder" />
              </div>
              <h5 className="service-title mt-3">Social Media Headers</h5>
              <p className="service-description">
              Create eye-catching social headers that enhance your profile's visual impact and strengthen your brand recognition. A well-designed header can make a powerful first impression on your audience.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-4">
          <button className="btn btn-outline-primary">View More Services</button>
        </div>
      </div>
    </div>

<Costeffective/>
<div className="text-center mt-4">
<a href="https://calendly.com/nida-ideal/call-with-media-dunes">  <button className="btn btn-blue primary">Book a Demo Call</button></a>
        </div> 
        
         {/* Concept-Creation-assisatance-service-para */}
<div className="assistance-service-container d-flex justify-content-center align-items-center">
      <div className="assistance-service-card p-4 ">
        <h5 className="text-uppercase text-light mb-3">Why Media Dunes</h5>
        <h2 className="text-white mb-3">
        What makes our Social Media design service different?
        </h2>
        <p className="text-light">
        Our social media design services are tailored to maximize engagement across various platforms. We stay ahead of the latest trends and platform requirements to create content that not only looks great but also drives interaction. Our designs are optimized for each specific social media channel, ensuring your posts and ads perform exceptionally well.
        </p>
      </div>
    </div>

    <FAQ/>
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
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default SocialMediaDesign