import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <footer className={classNames({ 'd-none': pathname === '/' })}>
      <Row>
        <Col className="copyright">
          &copy; 2020 | Created & Designed by <Link to="/">Vlad Krasovski</Link>
        </Col>
      </Row>
      <Row>
        <Col md={4} />
        <Col md={4} sm={12}>
          <div className="sm d-flex justify-content-around">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </Col>
        <Col md={4} />
      </Row>
    </footer>
  );
};

export default Footer;
