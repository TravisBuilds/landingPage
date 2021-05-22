import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import footer from '../assets-new/footer.png';
import telegram from '../assets-new/telegram.png';
import github from '../assets-new/github.png';
import gitbook from '../assets-new/gitbook.png';

function Footer() {
  return (

    <Jumbotron className="text-center" style={{   backgroundImage: `url(${footer})`, backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', color: 'white' }} fluid>
      <h3 style={{ color: '#7587D1', fontSize: "220%", lineHeight: '1px' }}>Highstreet Residents</h3>
     <br></br><br></br>
      <Container>
       
        <Row>
          <Col></Col>
          <Col></Col>   
          <Col></Col>
          <Col></Col>  
          <Col><a href='https://t.me/joinchat/_uUMfr2-VaA2ODFl'><Image style={{width:'30%'}} src={telegram} alt="telegram" fluid /></a></Col>     
          <Col><a href='https://github.com/TravisBuilds/HighStreet'><Image style={{width:'30%'}} src={github} alt="github" fluid /></a></Col>    
          <Col><a href='https://highstreet-market.gitbook.io/highstreet/'><Image style={{width:'30%'}} src={gitbook} alt="gitbook" fluid /></a></Col>    
          <Col></Col>     
          <Col></Col>    
          <Col></Col>       
          <Col></Col>  
        </Row>
     
       </Container>    
    </Jumbotron>
    // <Jumbotron fluid>
    //   <Container>
    //     <Row>
    //       <Col />
    //       <Col md="auto">Documentation</Col>
    //       <Col xs lg="2">Terms and Conditions</Col>
    //     </Row>

    //     <Row>
    //       <Col>Merging the digital world with the real world.</Col>
    //       <Col md="auto">Token Management</Col>
    //       <Col xs lg="2">Blog</Col>
    //     </Row>

    //     <Row>
    //       <Col>Discover, Buy, Trade, and redeem tokens from great brands around the world.</Col>
    //       <Col md="auto">Market</Col>
    //       <Col xs lg="2">Contact Us</Col>
    //     </Row>
    //   </Container>
    // </Jumbotron>
  );
}

export default Footer;
