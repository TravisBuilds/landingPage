import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import instagramLogo from '../assetPack/MerchantPage/instagram.png';
import merchantBackground from '../assets-new/merchantBackground.png'

const MerchantSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const instagramLogin = () => {
    window.location.href = '/auth/instagram';
  };

  const signup = () => {
    fetch('/api/merchant', {
      method: 'POST',
      contentType: 'application/json',
      body: JSON.stringify({
        name, email
      })
    })
  };

  return (
    <div className="text-center merchant-signup" style={{ backgroundImage: `url(${merchantBackground})`, backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',color: 'white' }}>

      <h1>Merchant Portal</h1>
      <h4>Sign up with instagram for Early Access</h4>

      <Container className="merchant-signup-box">
        <Row>
          <Col>
            <h3>Merchant Qualification</h3>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check" /></span>Has an official Instagram Account</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Can produce physical product</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Willing to provide KYC</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Has a Metamask or ERC20 Wallet</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Has an official Website</li>
            </ul>
          </Col>
          <Col>
            <h3>Signup</h3>
            <h4>Verify with Instagram and join our Waitlist</h4>
            <Image src={instagramLogo} fluid className="ig-login-btn" onClick={instagramLogin} />

            <h4>or</h4>
            <h4>Sing up with an official company account</h4>
            <div>
              <Form.Control type="email" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '50%' }} />
              <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '50%' }} />
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '50%' }} />
              <Button style={{width:'150px'}} variant="outline-success" onClick={signup}>Signup</Button>
            </div>
          </Col>
        </Row>

        <h4 className="contact">for support contact <a href="mailto:merchant@highstreet.market">merchant@highstreet.market</a></h4>
      </Container>
    </div>
  );
};

export default MerchantSignup;
