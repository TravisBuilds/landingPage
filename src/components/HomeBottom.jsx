import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import ethBackdrop from '../assets-new/ethBackdrop.png';
import vrBtn from '../assets-new/vr.png';
import webBtn from '../assets-new/web.png';

function HomeBottom() {
  return (
    <Jumbotron style={{ backgroundImage: `url(${ethBackdrop})`, backgroundSize: 'cover', color: 'white' }} fluid>
      <Container>
        <h1>Two ways to enter the market</h1>
        <Container>
          <Row>
            <Col>
              <Image src={vrBtn} fluid />
            </Col>
            <Col>
              <Image src={webBtn} fluid />
            </Col>
          </Row>
        </Container>
      </Container>
    </Jumbotron>
  );
}

export default HomeBottom;
