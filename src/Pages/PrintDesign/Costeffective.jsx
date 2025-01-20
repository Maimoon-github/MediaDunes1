import React from "react";
import "./Costeffective.css"; // Custom CSS file

const GraphicDesignCost = () => {
  return (
    <section className="graphic-design-cost py-5">
      <div className="container text-center">
        {/* Headings */}
        <h5 className="cost-title">Unlock Your Design Potential</h5>
        <h1 className="cost-subtitle">
         <b> Boost efficiency and save costs with our expert graphic design
          services</b>
        </h1>

        {/* Statistic Cards */}
        <div className="row mt-5">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-card">
              <h5 className="stat-title">Design Output</h5>
              <h3 className="stat-value">200% Increase</h3>
              <p className="stat-description">
                On average across marketing campaigns getting out of the door in
                comparison to previous design process
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-card">
              <h5 className="stat-title">Fast Turnaround</h5>
              <h3 className="stat-value">24-72 Hours</h3>
              <p className="stat-description">
                On average across all design projects worked on
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-card">
              <h5 className="stat-title">Average Savings</h5>
              <h3 className="stat-value">$20,000</h3>
              <p className="stat-description">
                Compared to hiring in-house, working with a freelancer or
                traditional graphic design agency
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-card">
              <h5 className="stat-title">Cost Reduction</h5>
              <h3 className="stat-value">40%</h3>
              <p className="stat-description">
                On average across 7,000 design assets that have been created
                across digital and print
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignCost;
