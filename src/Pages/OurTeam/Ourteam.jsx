import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Team.css'; // Import custom CSS

const teamMembers = [
  { name: "Nasir Mehmood", role: "Senior DevOps Engineer", image: "https://img.freepik.com/free-photo/happy-bearded-man-busines-clothes-with-crossed-arms-looking-camera-gray_171337-11335.jpg" },
  { name: "M Amin", role: "Senior UI/UX Designer", image: "https://img.freepik.com/free-photo/happy-bearded-man-busines-clothes-with-crossed-arms-looking-camera-gray_171337-11335.jpg" },
  { name: "Shehran", role: "2D & 3D Animator", image: "https://img.freepik.com/free-photo/happy-bearded-man-busines-clothes-with-crossed-arms-looking-camera-gray_171337-11335.jpg" },
  { name: "Nida Shahid", role: "Frontend Developer & ML Engineer", image: "https://media.istockphoto.com/id/1158717512/photo/smiling-indian-young-business-woman-wear-blue-jeans-shirt-looking-at-camera-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TGj38rrHG7XZbbpQT7q1g3A2_7b-WQw1z91Xf4sYF1w=" },
  { name: "Fizza", role: "UI/UX Designer", image: "https://media.istockphoto.com/id/1158717512/photo/smiling-indian-young-business-woman-wear-blue-jeans-shirt-looking-at-camera-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TGj38rrHG7XZbbpQT7q1g3A2_7b-WQw1z91Xf4sYF1w=" },
  { name: "Maimoon", role: "AI & ML Engineer", image: "https://img.freepik.com/free-photo/happy-bearded-man-busines-clothes-with-crossed-arms-looking-camera-gray_171337-11335.jpg" },
  { name: "Shahzaib", role: "AI & ML Engineer", image: "https://img.freepik.com/free-photo/happy-bearded-man-busines-clothes-with-crossed-arms-looking-camera-gray_171337-11335.jpg" },
  { name: "Ayesha", role: "Video Editor & Animator", image: "https://media.istockphoto.com/id/1158717512/photo/smiling-indian-young-business-woman-wear-blue-jeans-shirt-looking-at-camera-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TGj38rrHG7XZbbpQT7q1g3A2_7b-WQw1z91Xf4sYF1w=" },
  { name: "Faria", role: "MERN Developer", image: "https://media.istockphoto.com/id/1158717512/photo/smiling-indian-young-business-woman-wear-blue-jeans-shirt-looking-at-camera-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TGj38rrHG7XZbbpQT7q1g3A2_7b-WQw1z91Xf4sYF1w=" },
  { name: "Amna", role: "SEO Expert", image: "https://media.istockphoto.com/id/1158717512/photo/smiling-indian-young-business-woman-wear-blue-jeans-shirt-looking-at-camera-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TGj38rrHG7XZbbpQT7q1g3A2_7b-WQw1z91Xf4sYF1w=" },
  { name: "Ammar", role: "SEO Expert", image: "https://media.istockphoto.com/id/1158717512/photo/smiling-indian-young-business-woman-wear-blue-jeans-shirt-looking-at-camera-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TGj38rrHG7XZbbpQT7q1g3A2_7b-WQw1z91Xf4sYF1w=" },
];

const Team = () => {
  return (
    <Container className="team-container text-center">
      <h2 className="team-title">Our Team</h2>
      <Row>
        {teamMembers?.map((member, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <Card className="team-cards h-100">
              <Card.Img
                variant="top"
                src={member.image}
                alt={member.name}
                className="team-card-img"
              />
              <Card.Body>
                <Card.Title className="team-card-title">{member.name}</Card.Title>
                <Card.Text className="team-card-text">{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
