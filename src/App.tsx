import React, { useCallback, useState, useEffect } from 'react';
import classNames from 'classnames';
import './App.scss';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Container,
  Button,
} from 'reactstrap';
import { useLifecycle } from 'beautiful-react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { ReactComponent as Logo } from '@assets/logo.svg';

const IamStrings = ['A Developer', 'A Designer', 'A Youtuber', 'A Father'];

const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [currentText, setCurrentText] = useState<string>(IamStrings[0]);

  let interval: NodeJS.Timeout;
  let key = 0;
  useLifecycle(
    () => {
      interval = setInterval(() => {
        key++;
        if (key >= IamStrings.length) {
          key = 0;
        }

        setCurrentText(IamStrings[key]);
      }, 2000);
    },
    () => {
      clearInterval(interval);
    }
  );

  const toggle = useCallback(() => setShowSidebar(!showSidebar), [
    setShowSidebar,
    showSidebar,
  ]);
  return (
    <div className="App">
      <Navbar light expand="sm" fixed="top" color="light">
        <NavbarBrand href="/" className="logo">
          <Logo />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={showSidebar} navbar className="justify-content-end">
          <Nav navbar={!showSidebar} vertical={showSidebar}>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <section
        className={classNames({ 'home-content': true, active: showSidebar })}
      >
        <Container fluid className="text-center home-container">
          <h1>Hi I'm {currentText}</h1>
          <Button tag="a" outline className="contact-me-button" color="info">
            Contact Me
          </Button>
        </Container>

        <ul className="sci mb-0">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default App;
