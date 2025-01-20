import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Team.css'; // Import custom CSS for additional styling if needed
import Header from '../../Components/Header/Header';
import Teamcard from './Ourteam'
import Footer from '../../Components/Footer/Footer';
// import WorkGallery from '../../component/WorkGallery/Workgallery';
import FAQ from '../../Components/Faqs/Faqs';
// import CustomersReveiws from '../../component/CustomerReview/Customer'
import { Link } from "react-router-dom";   


const teamInfo = [
  {
    title: 'Sed ut perspiciatis',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
  },
  {
    title: 'Lorem ipsum dolor',
    description: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  },
  {
    title: 'Nemo enim ipsam',
    description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
  },
  {
    title: 'Tempor incididunt',
    description: 'Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.',
  },
];

const TeamPage = () => {
  return (
    <div>
    <Header/>
    <div className="container mt-5">
      <h2 className="text-center team-title">About Media Dunes</h2>
      <h3 className="text-center team-subtitle">Snap photos and share like never before and get better experience from our website. we have experienced staff to help you everytime.</h3>
      <div className="row mt-5">
        {teamInfo.map((info, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <h5 className="team-section-title">{info.title}</h5>
            <p className="team-section-description">{info.description}</p>
          </div>
        ))}
      </div>
    </div>

    <Teamcard/>
    {/* <WorkGallery bgColor={'white'}/> */}
   {/* < CustomersReveiws /> */}
    <FAQ bgColor={'white'}/>
    <Footer/>
    </div>
  );
};

export default TeamPage;
