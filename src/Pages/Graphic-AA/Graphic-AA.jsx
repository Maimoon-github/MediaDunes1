import React from 'react';
import './Graphic-AA.css';
import Header from '../../Components/Header/Header';
import Faq from './Faq'
import Footer from '../../Components/Footer/Footer';
function GraphicAA() {
  return (
    <div>
      <Header />
      <div className="graphic-banner">
        {/* Image Section */}
        <img
          src="https://s3-alpha-sig.figma.com/img/c46b/7d99/1691a99b030ce2abbcdf8d7928d02717?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g79lo~~KIizH2dbhip10hl2BvTxjrnrQGql88KaJO-MXAT8fxmpRSDNmijXSJBYE29h8pZJg-jHZg-1HmXvU8AduAcEoIs6bm2qpLSft1kzl~EIsoMmj1ngVKwER0dNI8LALvLhLdSuuVNM0zyRQDm0xYNQxB-veztQ7lI3V5QknITg9lYJiTm4TB33PNqBbSVriom7Q7lyHAYvXpyEksfYcO9Sxd2Avzke2bX5LZMDh0wpRU1LY6xaZz9gV2CeKFrZM4B0AmfOblSUMTLaYlzwSZzfflS3h~kuw8PO-1O4NkornuKfwsPDIYm3oZ8Mq9aydGy-7D~J-wXAIdL-pEQ__"
          alt="Graphic Assistance Banner"
          className="w-100"
        />
        {/* Text Section */}
        <div className="text-overlay">
          <h1 className="title">Graphic Design Admin & Assistance</h1>
          <p className="description-admin">
            No hidden costs, no hiring cost, just pay only for the pure work.
            Save thousands with our Simple and Flat Monthly Pricing. All Plans
            come with a 7 days money-back guarantee, no questions asked.
          </p>
          <div className="button-group">
            <button className="btn btn-blue me-3">Contact us</button>
            <button className=" btn btn-trans">See pricing plans</button>
          </div>
        </div>
      </div>


      {/* design workflow */}
      <div className="design-workflow-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6">
            <h6 className="subheading">Support for Every Creative Need</h6>
            <h2 className="title">Streamline Your Design Workflow</h2>
          </div>
          {/* Right Section */}
          <div className="col-md-6">
            <p className="description">
              Graphic design admin and assistance from Media Dunes provide crucial support
              for managing a wide range of design tasks. This service helps streamline
              workflows, ensuring that design projects are completed efficiently and to a
              high standard. From file management and version control to quality checks
              and coordination, having dedicated design assistance allows creative teams
              to focus on producing outstanding work.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* graphic design and admin assistant service */}
    <div className="assistance-services-section">
      <div className="container">
        <h2 className="section-title text-center">Graphic Design Admin & Assistance Services</h2>
        <div className="row text-center mt-5">
          {/* Service Card 1 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://www.accesscorp.com/wp-content/uploads/2020/03/iStock-1133511685.jpg" className="graphic-placeholder" alt="" />
              </div>
              <h5 className="service-title mt-3">File Management</h5>
              <p className="service-description">
                Organise and manage your design files efficiently with Media Dunes, ensuring 
                easy access and version control. Proper file management saves time and 
                prevents errors in your design workflow.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://kazokku.com/blog/wp-content/uploads/2024/03/Quality-Assurance-vs-Quality-Control.webp" alt="" className="graphic-placeholder" />
              </div>
              <h5 className="service-title mt-3">Quality Checks</h5>
              <p className="service-description">
                Perform thorough quality checks on your design projects with Media Dunes to 
                ensure they meet the highest standards. Regular quality checks help maintain 
                consistency and professionalism across all your designs.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="col-md-4">
            <div className="service-card">
              <div >
                <img src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/12/17114426/eprs-aag-542142-open-method-of-coordination.png" alt="" className="graphic-placeholder" />
              </div>
              <h5 className="service-title mt-3">Coordination</h5>
              <p className="service-description">
                At Media Dunes, coordinate seamlessly between diverse design projects and 
                team members to guarantee smooth workflows and timely delivery. Effective 
                coordination streamlines your projects and enhances team collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-4">
          <button className="btn btn-outline-primary">See pricing plans</button>
        </div>
      </div>
    </div>

    {/* graphic-assisatance-service-para */}
    <div className="assistance-service-container d-flex justify-content-center align-items-center">
      <div className="assistance-service-card p-4 ">
        <h5 className="text-uppercase text-light mb-3">Why Media Dunes</h5>
        <h2 className="text-white mb-3">
          What makes our Graphic Design Admin & Assistance service different?
        </h2>
        <p className="text-light">
          Our graphic design admin and assistance services streamline your
          workflow by providing comprehensive support for all design tasks. From
          file management to quality checks and project coordination, our team
          ensures that your design projects are executed efficiently and to the
          highest standards, allowing you to focus on creativity.
        </p>
      </div>
    </div>


{/* FAQ */}
<Faq/>


{/* Footer */}
<Footer/>
    </div>
  );
}

export default GraphicAA;
