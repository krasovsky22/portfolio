import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';
import { useLifecycle } from 'beautiful-react-hooks';

const IamStrings = ['A Developer', 'A Youtuber', 'A Designer', 'A Father'];

const Home: React.FC = () => {
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
  return (
    <>
      <Container fluid className="text-center home-container home-content">
        <h1>Hi I'm {currentText}</h1>
        <Button
          size="md"
          tag="a"
          outline
          className="contact-me-button"
          color="info"
        >
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
    </>
  );
};

export default Home;
