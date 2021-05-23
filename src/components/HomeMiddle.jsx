import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import bgPurpleSkymasked from '../assets-new/purpleSkymasked.png';
import bondingCurve from '../assets-new/bondingcurveWhole.png';

function HomeMiddle() {
  return (
    <Jumbotron className="text-center" style={{ backgroundImage: `url(${bgPurpleSkymasked})`, backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',color: 'white' }}>
      <h1 style={{ fontSize: '500%' }}>Here at Highstreet</h1>
      <h3 style={{ color: '#B5FF67', fontSize: "220%" }}>Everything is on a bonding curve</h3>
      <Container>
        <Image style={{width:'60%'}} src={bondingCurve} alt="bonding curve" fluid />
        <br></br><br></br><br></br>
        <Row>
          <Col> <h2> 24/7 Liquidity </h2></Col>
          <Col><h2> Redeem Physical Products</h2></Col>
          <Col><h2> Price Discovery by Fans </h2></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
          <br></br>
            <Button variant="outline-light" onClick={() => window.open("https://github.com/TravisBuilds/HighStreet")}>Learn More</Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HomeMiddle;