import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import topPattern from '../assets-new/topPattern.png';
import paperBtn from '../assets-new/paper.png';
import brands from '../assets/brands.png';
import box from '../assets-new/box.png';

function HomeTop() {
  const topPatternBg = {
    background: `url(${topPattern}) no-repeat top right`,
    backgroundSize: 'contain'
  };

  return (
      <Jumbotron fluid style={topPatternBg} className="homeTop">
        <Container>
          <Row>
            <Col>
              <h3>Buy, Trade, and Redeem</h3>
              <h5>Limited Edition Products From The Most Exciting Brands</h5>
              <br />
              <h1>
                Virtual Market Place
                  <br />
                  for Redeemable Products
                </h1>
              <div className="mb-2">
                <div className="loginButton">
                  <Button variant="light" onClick={() => '#open pdf'}>
                    <img src={paperBtn} alt="paper" height="50" />
                  </Button>

                  <Button variant="outline-light" onClick={() => { window.location.href = '/merchant-signup'; }}>
                    <img src={brands} alt="" height="50" />
                  </Button>
                </div>
              </div>
            </Col>

            <Col className="box">
              <Image src={box} height="400" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
  );
}

export default HomeTop;
