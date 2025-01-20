import React from "react";
import "./Blogs.css"; // For custom styling if needed
import { Container, Row, Col } from "react-bootstrap";

import Blogbody from "../Blogs/Blogbody"
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
const BlogPage = () => {
  return (
    <Container className="my-5">
      {/* Blog Header */}
      <h1 className="text-center blog-h mb-5">UI/UX Design Blogs</h1>

      {/* Categories */ 
      <Row className="justify-content-center mb-4">
        <Col xs="auto" className="text-center category">ALL</Col>
        <Col xs="auto" className="text-center category">UX DESIGN</Col>
        <Col xs="auto" className="text-center category">MOBILE APPS</Col>
        <Col xs="auto" className="text-center category">UX STRATEGY</Col>
        <Col xs="auto" className="text-center category">SAAS BUSINESS</Col>
        <Col xs="auto" className="text-center category">DESIGN SYSTEM</Col>
        <Col xs="auto" className="text-center category">FRONTEND DEVELOPMENT</Col>
        <Col xs="auto" className="text-center category">PRODUCT MANAGEMENT</Col>
        <Col xs="auto" className="text-center category">CASE STUDY</Col>
      </Row>}

      {/* Featured Blog Section */}
      <Row className="align-items-center blog-feature">
        <Col md={7}>
          {/* Image Placeholder */}
          <div className="">
            <img className="image-placeholder" src="https://www.eitbiz.com/blog/wp-content/uploads/2024/08/EITBIZ-BLOG-2.jpg" alt="" />
          </div>
        </Col>
        <Col md={5}>
          <p className="text-mutedd">FEATURED</p>
          <h2>What is Dynamic Island Apple – An Updated Guide for iOS18</h2>
          <p>Are you also an apple freak? Then you must know about the thrilling addition that has leveled up the entire vibe...</p>
          <p className="text-muted">
            <strong>Nida</strong> <br /> Author | Nov 08, 2024
          </p>
        </Col>
      </Row>
    </Container>
  );
};

function Blogs() {
    return(
        <div>
        <Header/>
        <BlogPage />
        <Blogbody/>
        <Footer/>
        </div>
    )
}

export default Blogs;