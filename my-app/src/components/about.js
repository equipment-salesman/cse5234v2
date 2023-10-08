import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./about.css"
import MarkPic from '../images/Mark Picture.jpg'

const employees = [
  {
    name: 'Mark Howard',
    position: 'CFO',
    photo: MarkPic,
    about: 'Mark is a senior majoring in Computer Science and Engineering at The Ohio State University. Mark was born and raised in Bedford, Ohio.',
  },
  {
    name: 'Employee 2',
    position: 'Position 2',
    photo: MarkPic,
    about: 'About Employee 2...',
  },
  {
    name: 'Employee 3',
    position: 'Position 3',
    photo: MarkPic,
    about: 'About Employee 3...',
  }
];

const About= () => {
  return (
    <Container>
      <h1>About Our Team</h1>
      <Row>
        {employees.map((employee, index) => (
          <Col key={index} md={4}>
            <Card  className="mb-3">
              <Card.Img class = "img-responsive" variant="top" src={(employee.photo)}/>
              <Card.Body>
                <Card.Title className="employee-name">{employee.name}</Card.Title>
                <Card.Subtitle className="position">{employee.position}</Card.Subtitle>
                <Card.Text className="about-text">{employee.about}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;
