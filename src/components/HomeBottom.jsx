import React, { useContext, useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import useInjectedWeb3 from '../components/Hooks/useInjectedWeb3';
import useLoadinjectedEthersState from '../components/Hooks/useLoadInjectedEthersState';
import AvatarGenerator from '../components/AvatarGenerator';
import ProductProvider from '../contexts/ProductProvider';
import WalletProvider from '../contexts/WalletProvider';
import User from '../libs/user';
import Bvideo from '../assets-new/backgroundvideo.mp4';

import ethBackdrop from '../assets-new/ethBackdrop.png';
import vrBtn from '../assets-new/vr.png';
import webBtn from '../assets-new/web.png';

function HomeBottom() {
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [email, setEmail] = useState('');
  const history = useHistory();
  const handleClick = (path) => {
    history.push(path);
  };

  const wallet = useContext(WalletProvider.context);
  const { products } = useContext(ProductProvider.context);

  useInjectedWeb3();
  useLoadinjectedEthersState();

  const generateAvatar = () => {
    setShowAvatarModal(true);
    User.save({
     // email,
      walletAddress: wallet.address
    });
  };




  return (
    <Jumbotron className="text-center" style={{   backgroundImage: `url(${ethBackdrop})`, backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', color: 'white' }} fluid>

      <Container>
      <h1 style={{ fontSize: '500%' }}>two ways to ener the market </h1>
      <h3 style={{ color: '#B5FF67', fontSize: "220%" }}> <span style={{color:"#FF8B8B"}}>Red Pill</span><span style={{color:"#7581EA"}}>Blue Pill</span>Take Your Pick</h3>
      <br></br><br></br>
        <Container>
          <Row>
            <Col>
              <Image src={vrBtn} fluid style={{width:'50%'}} />
            </Col>
            <Col>
              <Image src={webBtn} fluid style={{width:'50%'}} />
            </Col>
          </Row>
          <Row>
          <Col></Col>
          <Col>
            {/* <Button variant="outline-success" onClick={generateAvatar}>Create Avatar</Button> */}
            <h2 style={{ color: '#B5FF67'}}>Coming Soon in June</h2>
          </Col>
          <Col></Col>
        </Row>
        </Container>
      </Container>
    </Jumbotron>

  );
}

export default HomeBottom;
