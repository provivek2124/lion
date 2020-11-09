import React, {useEffect}  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./gymnameconainer.css";

function GymnameConainer  () {
    useEffect(() => {
        AOS.init({duration:2000})        
        
    }, [])
    return (
        <div class="header-extradiv" >
            <div class="container">
                <Container>
                    <Row>
                        <Col xs className="extradiv" data-aos="fade-right">Ajay Lion's Gym</Col>
                            <Col xs className="extradiv" data-aos="fade-up" >The Rock Hard Gym </Col>
                            <Col xs className="extradiv" data-aos="fade-left">The Lion's Gym</Col>
                    </Row>
                </Container>
            
            </div>
        </div>
    )
}

export default GymnameConainer
