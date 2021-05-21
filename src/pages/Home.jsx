import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import useInjectedWeb3 from '../components/Hooks/useInjectedWeb3';
import useLoadinjectedEthersState from '../components/Hooks/useLoadInjectedEthersState';
import AvatarGenerator from '../components/AvatarGenerator';
import ProductProvider from '../contexts/ProductProvider';
import WalletProvider from '../contexts/WalletProvider';
import User from '../libs/user';

// temp asset import, will remove when datastructure is built
import metamask from '../assets/metamask2.png';
import brands from '../assets/brands.png';
import rpm from '../assets/rpm.png';
// import steam from '../assets/steam.png';
// import oculus from '../assets/oculus.png';
import metaverse from '../assets/backgroundMetaverse.png';
import liquidityMining from '../assets/liquidityMining.png';
import marketplace from '../assets/marketplace.png';

import topPattern from '../assets-new/topPattern.png';
import newLogo from '../assets-new/logoPlaceholder.png';
import bondingCurve from '../assets-new/bondingcurveWhole.png';
import box from '../assets-new/box.png';
import ethBackdrop from '../assets-new/ethBackdrop.png';
import litePaper from '../assets-new/lite.png';
import paperBtn from '../assets-new/paper.png';
import bgPurpleSkymasked from '../assets-new/purpleSkymasked.png';
import vrBtn from '../assets-new/vr.png';
import webBtn from '../assets-new/web.png';

const Home = () => {
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
    <div className="landing">
      <div id="jumbo">
        <Jumbotron fluid>
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
                      <img src={paperBtn} alt="paper" />
                    </Button>

                    <Button variant="outline-light" onClick={() => { window.location.href = '/merchant-signup'; }}>
                      <img src={brands} alt="" />
                    </Button>
                  </div>
                </div>
              </Col>

              <div className="shrinkGone">
                <Col>
                  <Image src={topPattern} height="400px" />
                </Col>
              </div>
            </Row>
          </Container>
        </Jumbotron>
      </div>

      <Jumbotron className="text-center" style={{ backgroundImage: `url(${bgPurpleSkymasked})`, color: 'white' }}>
        <h2>Here at Highstreet</h2>
        <h4>Shop for Limited Edition Products or Shake Your Street Tokens for Rewards</h4>
        <Container>
          <Image src={bondingCurve} alt="bonding curve" />
        </Container>
      </Jumbotron>

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
    </div>
  );
};

export default Home;
