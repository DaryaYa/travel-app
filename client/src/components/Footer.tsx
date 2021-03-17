import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
// IMAGES
import RSLogo from '../assets/images/rs_school_js.svg';
import daryaGhImg from '../assets/images/daryaya.jpg';
import fizikGhImg from '../assets/images/fizik003.png';
import dielGhImg from '../assets/images/diel89.png';
import nickGhImg from '../assets/images/nickolay-dudaryk.png';

const Footer = () => {
  const styles = {
    backgroundColor: '#007bff',
  }

  return (
    <footer style={styles}>
      <Container fluid>
        <Row>
          <Col className="pt-2 pb-0">
            <p>© 2021</p>
          </Col>
          <Col className="d-flex justify-content-center pt-2 pb-0">
            <a target="_blank" rel="noreferrer" href="https://github.com/DaryaYa">
              <Image
                className="mr-2"
                src={daryaGhImg}
                style={{width: '30px', height: '30px'}}
                roundedCircle
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/fizik003">
              <Image
                className="mr-2"
                src={fizikGhImg}
                style={{width: '30px', height: '30px'}}
                roundedCircle
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/DieL89">            
              <Image
                className="mr-2"
                src={dielGhImg}
                style={{width: '30px', height: '30px'}}
                roundedCircle
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Nickolay-Dudaryk">           
              <Image
                src={nickGhImg}
                style={{width: '30px', height: '30px'}}
                roundedCircle
              />
            </a>
          </Col>
          <Col className="d-flex justify-content-end pt-2 pb-0">
            <a target="_blank" rel="noreferrer" href="https://rs.school/js/">
              <Image
                src={RSLogo}
                style={{width: '40px'}}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
