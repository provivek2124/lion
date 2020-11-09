import React from 'react';
import "./images-conainer.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../asses/images/img1.jpeg';
import img2 from '../../asses/images/img2.jpeg';
import img3 from '../../asses/images/img3.jpeg';
import Carousel from 'react-bootstrap/Carousel'
import img21 from '../../asses/images/img21.jpeg';
import img22 from '../../asses/images/img22.jpeg';
import img23 from '../../asses/images/img23.jpeg';
import img24 from '../../asses/images/img24.jpeg';
import img25 from '../../asses/images/img25.jpeg';
import img26 from '../../asses/images/img26.jpeg';
import img27 from '../../asses/images/img27.jpeg';

function ImagesConainer() {
    return (
        <div className="services">
            <div className="container">
                <div className="service-cards">
                <Container>
                    <Row className="con">
                        
                        <Col sm className="extradivv" id="c1">
                        <Carousel interval={3000}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                        src={img1}
                                            alt="First slide"
                                            width="400px"
                                            height="300px"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                                width="400px"
                                height="300px"
                                />
                            </Carousel.Item>

                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img3}
                                alt="Second slide"
                                width="400px"
                                height="300px"
                                />
                            </Carousel.Item>
                
                            </Carousel>
                        </Col>
                        <Col sm> 
                        <h1>Ajay Lion's Gym</h1>
                        <p>Lorem ipsum</p>
                        </Col>
                            
                    </Row>


                    <Row className="con">

                    <Col sm>
                        <h1>The Rock Hard Gym</h1>
                        <p>Lorem Ipsum</p>
                        </Col>
                        
                        <Col sm className="extradivv">
                        <Carousel interval={3000}>
                            

                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img25}
                                alt="Second slide"
                                width="400px"
                                height="300px"
                                />
                            </Carousel.Item>

                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img26}
                                alt="Second slide"
                                width="400px"
                                height="300px"
                                />
                            </Carousel.Item>

                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img27}
                                alt="Second slide"
                                width="400px"
                                height="300px"
                                />
                            </Carousel.Item>
                
                            </Carousel>
                        </Col>
                        
                            
                    </Row>


                    <Row className="con">

                    
                        
                        <Col sm className="extradivv">
                        <Carousel interval={3000}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                        src={img21}
                                            alt="First slide"
                                            width="400px"
                                            height="300px"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                className="d-block w-100"
                                src={img22}
                                alt="Second slide"
                                width="400px"
                                height="300px"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img23}
                                alt="Second slide"
                                width="400px"
                                height="300px"
                                />
                            </Carousel.Item>

                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img24}
                                alt="Second slide"
                                width="400px"
                                height="300px"
                                />
                            </Carousel.Item>

                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={img25}
                                alt="Second slide"
                                width="400px"
                                height="300px"
                                />
                            </Carousel.Item>
                
                            </Carousel>
                        </Col>

                        <Col sm>
                            <h1> The Lion's Gym </h1>
                            <p> Lorem Ipsum</p>
                            </Col>
                        
                            
                    </Row>
                    


                </Container>

                </div>


            </div>
            
        </div>
    )
}

export default ImagesConainer
