import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ethBackdrop from '../assets-new/ethBackdrop.png';
import ReactPlayer from 'react-player/youtube'

function HomeMiddleTwo() {
    return (
        <Jumbotron className="text-center" style={{
            color: 'white' ,overflow:'hidden' ,padding:'0', height:'500px',background:'rgba(0,0,0,0.7)'
        }} fluid>
            <ReactPlayer url="https://www.youtube.com/watch?v=lZHJ_h6ox7E"
            width='100%' height='500px' loop muted playing style={{position:'absolute', zIndex:'-1'}} 
            />
            <Container>
                <h1 style={{ marginTop:'1em', fontSize: '400%' }}>Proof of play liquidity mining </h1>
                <h3 style={{ color: 'skyblue', fontSize: "220%", lineHeight: '1px' }}> <span style={{ color: "#7587D1" }}>Available for PCVR on</span> Viveport </h3>
                <br></br><br></br>
                <Container>
                    <Row>

                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                        
                            <Button style={{marginTop:'8em'}} variant="outline-success">Generate Avatar First</Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Container>
        </Jumbotron>
    );
}
export default HomeMiddleTwo;