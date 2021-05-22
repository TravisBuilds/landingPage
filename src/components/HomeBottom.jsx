import React, { useContext, useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import useInjectedWeb3 from '../components/Hooks/useInjectedWeb3';
import useLoadinjectedEthersState from '../components/Hooks/useLoadInjectedEthersState';
import AvatarGenerator from '../components/AvatarGenerator';
import ProductProvider from '../contexts/ProductProvider';
import WalletProvider from '../contexts/WalletProvider';
import User from '../libs/user';

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
      email,
      walletAddress: wallet.address
    });
  };

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
