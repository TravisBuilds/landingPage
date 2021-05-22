import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ethBackdrop from '../assets-new/ethBackdrop.png';

function HomeMiddleTwo() {
    return (
        <Jumbotron className="text-center" style={{
            backgroundImage: `url(${ethBackdrop})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', color: 'white'
        }} fluid>

            <Container>
                <h1 style={{ fontSize: '400%' }}>Proof of play liquidity mining </h1>
                <h3 style={{ color: 'skyblue', fontSize: "220%", lineHeight: '1px' }}> <span style={{ color: "#7587D1" }}>Available for PCVR on</span> Viveport </h3>
                <br></br><br></br>
                <Container>
                    <Row>

                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Button variant="outline-success">Generate Avatar First</Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Container>
        </Jumbotron>
    );
}
export default HomeMiddleTwo;