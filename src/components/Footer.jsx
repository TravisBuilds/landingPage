import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col />
          <Col md="auto">Documentation</Col>
          <Col xs lg="2">Terms and Conditions</Col>
        </Row>

        <Row>
          <Col>Merging the digital world with the real world.</Col>
          <Col md="auto">Token Management</Col>
          <Col xs lg="2">Blog</Col>
        </Row>

        <Row>
          <Col>Discover, Buy, Trade, and redeem tokens from great brands around the world.</Col>
          <Col md="auto">Market</Col>
          <Col xs lg="2">Contact Us</Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Footer;
