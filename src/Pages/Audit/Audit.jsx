import React from 'react'
import './Audit.css'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import WorkGallery from '../../Components/WorkGallery/Workgallery';
import WorkflowSection from '../../Components/Workflow/Workflow';


function UXAuditChecklistForm() {
  return (
    <div className="container my-5">
    <div className="row align-items-center">
      {/* Text Section */}
      <div className="col-md-6">
        <h2 className="audit-h1 fw-bold">The Ultimate SaaS UX Audit Checklist</h2>
        <ul className="checklist mt-3">
          <li>Reduce the churn rates to less than 5%</li>
          <li>Increase MRR and ARR by Significant Percentage</li>
          <li>Create User-Centric SaaS Product</li>
          <li>Create a SaaS Product that Hooks and Sells</li>
        </ul>
      </div>
      
      {/* Image Section */}
      <div className="col-md-6 d-flex justify-content-center">
        <div className="audit-image">
          {/* Replace with actual image or SVG if available */}
          <img src='ux-book1.webp' alt="Audit Checklist Book" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
  );
} 
function AuditForm(){
  return(
<div className="container my-5">
      <div className="p-5 bgg-beige rounded">
        <h2 className="text-center audit-h1 mb-4">Download UX Audit Checklist</h2>
        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label labels">Full Name <span>*</span></label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label labels ">Company Name  <span>*</span></label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Company name"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label labels">Phone Number <span>*</span></label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label labels">Work Email <span>*</span></label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your work email"
                required
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-audit">Download Checklist →</button>
          </div>
        </form>
      </div>
    </div>
  )
}
function Audit() {
  return (
    <div>
        <Header/>
        
        <UXAuditChecklistForm/>
        <AuditForm/>
        
        <WorkGallery/>
        <WorkflowSection/>
        <Footer/>
    </div>
  )
}

export default Audit