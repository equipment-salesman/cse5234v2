import React from "react";
import './contact.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Email from '../images/email-logo.png'
import Cell from '../images/cellphonelogo.jpg'
import Location from '../images/location-logo.png'

const Cart = () => {
  
  return (
    <Container className="mb-5">
      <Row className="py-5">
        <h2 className="display-3">
          Have a question? Reach out!
        </h2>
        <p className="lead">
          If you have inquiries about your order, up-coming sales, or even federal regulations -- we are ready to answer your questions.
        </p>
      </Row>

      <Row className="h-80">

        <Col className="align-items-stretch">
          <Card className="h-100">
            <Card.Header>Email Us</Card.Header>
            <div>
              <Card.Img className="img-email" src={Email}/>
            </div>
            <Card.Body>To answer your question, email us at contact-fnad@fnad.com</Card.Body>
          </Card>
        </Col>

        <Col className="align-items-stretch">
          <Card className="h-100">
            <Card.Header>Calls Us</Card.Header>
            <div className="overflow-hidden">
              <Card.Img className="img-phone" src={Cell}/>
            </div>
            <Card.Body>Give us a call at 1-800-760-2670</Card.Body>
          </Card>
        </Col>
        
        <Col className="align-items-stretch">
          <Card>
            <Card.Header>Find Us</Card.Header>
            <div className="w-100">
              <Card.Img className="img-contact" src={Location}/>
            </div>
            
            <Card.Body>We are located at Caldwell Laboratory: 2024 Neil Ave, Columbus, OH 43210</Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
};
  
export default Cart;