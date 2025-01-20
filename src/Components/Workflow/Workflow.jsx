import React from "react";
import "./Workflow.css";

const WorkflowSection = () => {
  return (
    <section className="workflow-section text-center p-5" id="workflow-section">
      <div className="container">
        {/* Heading */}
        <h2 className="workflow-title  blue">
        Our process is meticulously designed to ensure a seamless collaboration,
        <br />

          <b>delivering the quality and responsiveness of an in-house team.
          </b>
        </h2>
       

        {/* Workflow Content */}
        <div className="workflow-content mt-5 d-flex flex-column flex-md-row align-items-center justify-content-center">
          {/* Left Box */}
          <div className="workflow-box p-4">
            <h4 className="fw-bold">Our Team</h4>
            <p>We dedicate an expert product designer who works directly with you whenever you need them.</p>
            <p>We connect with you over Slack connect or Microsoft Teams. You don't have to change anything in your workflow.</p>
            <p>We become part of your team and operate like your own internal design department.</p>
          </div>

          {/* Arrows */}
          <div className="workflow-arrows text-center">
            <div className="arrow">→</div>
            <div className="arrow">←</div>
          </div>

          {/* Right Box */}
          <div className="workflow-box p-4">
            <h4 className="fw-bold">You Are</h4>
            <p>An Engineering-driven SaaS company that’s looking for reliable and expert Product Designers.</p>
            <p>You want to start ASAP without spending a fortune in hiring, managing, and training in-house product designers.</p>
            <p>You are looking to improve user onboarding and revenues with intuitive product design.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
