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
import logo from '../assets-new/logo.png';

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
              <Image
                src= {logo} height='110'
             />
             <br></br><br></br>
              <h3 style={{color:'#83A75D', fontSize: '220%'}}>Buy, Trade, and Redeem</h3>
              <h1 style={{ fontSize: '450%', color:'#7587D1' }}>
                Redeemable
                  <br />
                  Limited Edition
                  <br />
                  Products
                </h1>
              <div className="mb-2">
                <div className="loginButton">
                  <Button style={{width:'220px', borderRadius:'0',border: 'none', background: 'linear-gradient(#D9D0F4, #7587D1)'}} size='lg' variant="primary" onClick={() => window.open("https://github.com/TravisBuilds/HighStreet")}>
                   Paper
                  </Button>

                  <Button style={{width: '220px',color: '#7587D1', borderColor:'#7587D1', borderRadius:'0'}} size="lg" variant="outline-light" onClick={() => { window.location.href = '/merchant-signup'; }}>
                    Merchant
                  </Button>
                </div>
              </div>
            </Col>
            {/* <Col></Col> */}
            <Col className="box">
              <Image src={box} height="450" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
  );
}

export default HomeTop;
