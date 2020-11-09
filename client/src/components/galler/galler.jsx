import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img11 from '../../asses/images/img11.jpeg';
import img12 from '../../asses/images/img12.jpeg';
import img13 from '../../asses/images/img13.jpeg';
import img14 from '../../asses/images/img14.jpeg';
import img15 from '../../asses/images/img15.jpeg';
import img16 from '../../asses/images/img16.jpeg';
import img17 from '../../asses/images/img17.jpeg';
import img18 from '../../asses/images/img18.jpeg';

import Carousel from 'react-bootstrap/Carousel'
import "./galler.css";

function Galler() {
    return (
        <div className="services">
            <div className="container">
                <div className="service-cards">
                <Container>
                    <Row className="con">
                    <Col sm> <h1>From the desk of Ajay Saini </h1></Col>
                        
                        <Col sm className="gal_extradivv" id="c1">
                        <Carousel interval={2000}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                        src={img11}
                                            alt="First slide"
                                            width="200px"
                                            height="400px"

                                            
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img12}
                                alt="Second slide"
                                width="200px"
                                height="400px"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img13}
                                alt="Second slide"
                                width="200px"
                                height="400px"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img14}
                                alt="Second slide"
                                width="200px"
                                height="400px"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img15}
                                alt="Second slide"
                                width="200px"
                                height="400px"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img16}
                                alt="Second slide"
                                width="200px"
                                height="400px"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img17}
                                alt="Second slide"
                                width="200px"
                                height="400px"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img18}
                                alt="Second slide"
                                width="200px"
                                height="400px"
                                />
                            </Carousel.Item>

                
                            </Carousel>
                        </Col>
                        
                            
                   </Row>

                </Container>

                </div>


            </div>
            
        </div>
 )
}

export default Galler