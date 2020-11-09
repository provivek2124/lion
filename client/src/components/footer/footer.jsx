import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./footer.css"

function Footer() {
    return (
        <div class="footer">
            <Container>
            
                <Row>
                    <Col sm>Logo</Col>
                    <Col sm>Social Media</Col>
                    <Col sm>Contact us</Col>
                    <Col sm>map</Col>
                    </Row>
            </Container>
            
        </div>
    )
}

export default Footer
