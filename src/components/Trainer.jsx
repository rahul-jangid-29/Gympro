import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
// import "../styles/trainers.css";  // Create your own CSS for styling

const trainers = [
  {
    name: "John Doe",
    expertise: "Certified Personal Trainer",
    bio: "John has over 10 years of experience helping individuals achieve their fitness goals. He specializes in strength training and injury prevention.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    expertise: "Yoga Instructor",
    bio: "Jane is a certified yoga instructor with a passion for helping people find balance and flexibility. She focuses on mindfulness and restorative practices.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Michael Brown",
    expertise: "Cardio & HIIT Trainer",
    bio: "Michael is a high-intensity interval training (HIIT) specialist, helping clients burn fat, build endurance, and push their limits.",
    image: "https://via.placeholder.com/150",
  },
];

const Trainers = () => {
  return (
    <div className="trainers-page container my-5">
      <h2 className="text-center mb-5">Meet Our Trainers</h2>
      <Row className="g-4">
        {trainers.map((trainer, index) => (
          <Col key={index} sm={12} md={4}>
            <Card className="trainer-card shadow-lg border-0">
              <Card.Img variant="top" src={trainer.image} alt={trainer.name} />
              <Card.Body>
                <Card.Title className="fw-bold">{trainer.name}</Card.Title>
                <Card.Subtitle className="text-muted mb-3">
                  {trainer.expertise}
                </Card.Subtitle>
                <Card.Text>{trainer.bio}</Card.Text>
                <Button variant="primary" className="w-100">
                  Book a Session
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Trainers;
