import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        The Ultimate UX Audit Checklist for SaaS Founders is now available.{" "}
        <Link to="/audit" className="highlight-link">
          <b>Learn More</b>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg main-header">
        <div className="container head-con">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="logo.png" alt="Media Dunes Logo" className="logo" />
          </Link>

          {/* Toggler Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/services"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Print-Design">
                      Print Design
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Digital-Design">
                    Digital Ad Design
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Graphic-Admin-Assistance">
                    Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Infographic-Design">
                    Infographic Design
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Social-Media-Design">
                    Social Media Design
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Concept-Creation">
                    Concept Creating
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Software-team">
                    Developer team
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/price">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourwork">
                  Our Work Library
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/audit">
                  Free UI/UX Audit
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
            </ul>
            <Link
              to="/contactus"
              className="contact-btn"
              style={{ textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
