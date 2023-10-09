import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./about.css"
import MarkPic from '../images/Mark Picture.jpg'
import MaxPic from '../images/Max Picture.JPG'
import AustinPic from '../images/austinPic.jpeg'

const employees = [
  {
    name: 'Mark Howard',
    position: 'CFO',
    photo: MarkPic,
    about: 'Mark is a senior majoring in Computer Science and Engineering at The Ohio State University. Mark was born and raised in Bedford, Ohio.',
  },
  {
    name: 'Max Daley',
    position: 'CEO',
    photo: MaxPic,
    about: 'Max is a senior majoring in CIS at The Ohio State University. Born and raised in Columbus Ohio, he is passionate about software engineering and rock climbing',
  },
  {
    name: 'Austin Carrick',
    position: 'CTO',
    photo: AustinPic,
    about: 'Austin is a senior majoring in Computer Science and Engineering at The Ohio State University. Born and raised in Leroy, New York.',
  }
];

const About= () => {
  return (
    <Container>
      <h1>About Our Team</h1>
      <Row>
        {employees.map((employee, index) => (
          <Col key={index} md={4}>
            <Card  className="mb-3 h-100">
              <Card.Img className="img h-75" variant="top" src={(employee.photo)}/>
              <Card.Body>
                <Card.Title className="employee-name">{employee.name}</Card.Title>
                <Card.Subtitle className="position">{employee.position}</Card.Subtitle>
                <Card.Text className="about-text">{employee.about}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {employees.map((employee, index) => (
          <Col key={index} md={4}>
            <Card  className="mb-3 h-100">
              <Card.Img className="img h-75" variant="top" src={(employee.photo)}/>
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
