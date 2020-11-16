import React from 'react';
import { Row, Col } from "react-bootstrap";


const Footer = () => {
  return (
    <div className="footer">
      <Row className="footer__row">
        <Col className="footer__contact">
          <h5>Contact us:</h5>
          <div className="text-size">
            <p>5 Hanover Square</p>
            <p>Floor 11</p>
            <p>New York, NY 10004</p>
          </div>
        </Col>
        <div className="copyright footer__copyright">
          <div>Copyright &copy;{new Date().getFullYear()} | Radius</div>
        </div>
        <Col className="iconContainer footer__icons">
          <Row className="iconsRight">
            <a href="https://github.com/MozMM/Radius">
              <img className='icon' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt='github'></img>
            </a>
          </Row>
          {/* <Row className="iconsRight">
            <a href="https://www.youtube.com/">
              <img className='icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqXsRF7wzd8emX1UX2JGk82CC_4hxxAJ0NAA&usqp=CAU" alt='youtube'></img>
            </a>
          </Row> */}
        </Col>
      </Row>
    </div>
  )
}

export default Footer;
