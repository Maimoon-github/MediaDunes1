import React from 'react'
import Header from '../../Components/Header/Header'
import './Softwareteam.css'
import RemoteTeamsChallenges from '../../Components/Remotesoftware/Remotesoftware'
import Teamprocess from '../../Assets/Remotesoftware/dedicated team process 1.svg'
import team1 from '../../Assets/Remotesoftware/01 1.svg'
import team2 from '../../Assets/Remotesoftware/02 1.svg'
import team3 from '../../Assets/Remotesoftware/03 1.svg'
import team4 from '../../Assets/Remotesoftware/04 1.svg'
import Footer from '../../Components/Footer/Footer'
function Softwareteam() {
  return (
    <div>
        <Header/>

        <section className="Softwareteam-hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          {/* Text Section */}
          <div className="col-lg-6 col-md-12 text-section">
            <h1 className="hero-title">Dedicated Software Development Team</h1>
            <p className="hero-description">
            Media Dunes' dedicated development team model is a strategic partnership designed to help businesses accelerate their digital projects. Our experienced team can be seamlessly integrated into your workflow to provide the expertise and resources you need.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-blue me-3">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* remote teams adress */}
    <RemoteTeamsChallenges/>

    {/* dedicated team */}
    <div className="dedicated-team-container">
      <h2>Dedicated software development team services</h2>
      <p className="intro">
        Media Dunes offers dedicated software development team services for those of our customers who want complete control of the development process, as well as for those who want to outsource the project management to us.
      </p>
      

      <div className="dedicated-team-section">
        <h3>Dedicated team managed by Media Dunes</h3>
        <p className="intro">
          Media Dunes builds remote dedicated teams that are engaged exclusively in customers' projects. When we perform people and project management, we are fully responsible for the results that our team delivers. You choose the level to which you would like to be involved in the project. Working with globally distributed teams of dedicated developers, we have honed our skill of team and time management by applying best practices of agile methodologies and tools.
        </p>
      </div>

      <div className="dedicated-team-section">
        <h3>Dedicated team managed by client</h3>
        <p className="intro">
          The other option is to hire dedicated developers for team augmentation. A dedicated team for software development managed by a client is a great solution for those who have a lack of necessary resources or domain-specific expertise in-house. We have a pool of UX/UI designers, frontend and backend developers, testing and support specialists, available upon your request. You can scale up and down your team, as the project goes.
        </p>
      </div>
    </div>



    {/* Process */}
    <div className="proces-container">
      <h2 className="mb-4">Our Process</h2>
      <p className="mb-5">
        Once the customers get our dedicated development team for hire, they are provided with
        instant access to our technology and domain skillset and mature software development
        processes and methodologies that can be adjusted to the customers’ practices and methodologies.
      </p>
      <div className="row mt-4">
        <div className="col-md-12 text-center">
          <img src={Teamprocess} alt="Process Timeline" className="img-fluid m-4" />
        </div>
      </div>

      <div className="row processcenter">
        <div className="col-md-5">
          <div className="process-step">
            <div className="step-icon"><img src={team1} alt="" /></div>
            <h4 className="mt-3">Analysis</h4>
            <p className="mt-3">
              Initially, we deeply analyze your business needs and requirements and convert them into
              measurable goals. Then, we work out a clear plan that includes resources, scope, and a
              roadmap.
            </p>
            
          </div>
        </div>
        <div className="col-md-5">
          <div className="process-step">
            <div className="step-icon"><img src={team2} alt="" /></div>
            <h4 className="mt-3">Team Selection</h4>
            <p className="mt-3">
              After analyzing your project goals, we shortlist candidates, send profiles, and organize
              interviews to ensure they perfectly fit your project needs.
            </p>
          </div>
        </div>
        <div className="col-md-5">
          <div className="process-step">
            <div className="step-icon"><img src={team3} alt="" /></div>
            <h4 className="mt-3">Launch</h4>
            <p className="mt-3">
              The next step includes the project kick-off and setup. Customers get access to ready IT
              infrastructure and customized software processes.
            </p>
          </div>
        </div>
        <div className="col-md-5">
          <div className="process-step">
            <div className="step-icon"><img src={team4} alt="" /></div>
            <h4 className="mt-3">Operation</h4>
            <p className="mt-3">
              Collaboration with our dedicated team means daily updates, regular demos, and steady
              reviews. Adjustments for scalability are made effectively.
            </p>
          </div>
        </div>
      </div>
    </div>


    {/*  */}
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
<Footer/>
    </div>
  )
}

export default Softwareteam