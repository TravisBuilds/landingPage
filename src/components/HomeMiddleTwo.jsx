import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Bvideo from '../assets-new/backgroundvideo.mp4'

function HomeMiddleTwo() {
    return (
        <div>

       <video autoPlay loop muted style={{
        position: "absolute",
        width:"100%",
        left:"100%",
        top: "50%",
        height: "100%",
        objectPit:"cover",
        transform:"transalte(-50%, -50%)",
        zIndex:"-1",
        
      }}>
       <source src={Bvideo} type='video/mp4'/> 
      </video>
     </div>
    )
}
export default HomeMiddleTwo;