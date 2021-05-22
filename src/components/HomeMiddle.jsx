import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import bgPurpleSkymasked from '../assets-new/purpleSkymasked.png';
import bondingCurve from '../assets-new/bondingcurveWhole.png';

function HomeMiddle() {
  return (
    <Jumbotron className="text-center" style={{ backgroundImage: `url(${bgPurpleSkymasked})`, color: 'white' }}>
        <h2>Here at Highstreet</h2>
        <h4>Shop for Limited Edition Products or Shake Your Street Tokens for Rewards</h4>
        <Container>
          <Image src={bondingCurve} alt="bonding curve" fluid />
        </Container>
      </Jumbotron>
  );
}

export default HomeMiddle;