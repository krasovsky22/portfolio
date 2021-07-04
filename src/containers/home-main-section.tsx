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
import { AwsSolutionArchitectBadge } from '@/components/badges';

const IamStrings = ['A Developer', 'An Architect', 'An Inventor', 'A Designer'];

const HomeMainSectionContainer: React.FC = () => {
  const [currentText, setCurrentText] = useState<string>(IamStrings[0]);
  const [interval, setIntervalState] = useState<NodeJS.Timeout | null>(null);

  let key = 0;
  useLifecycle(
    () => {
      const tInterval = setInterval(() => {
        key++;
        if (key >= IamStrings.length) {
          key = 0;
        }

        setCurrentText(IamStrings[key]);
      }, 2000);

      setIntervalState(tInterval);
    },
    () => {
      interval && clearInterval(interval);
    }
  );
  return (
    <section>
      <div className="home-content">
        <Container fluid className=" text-center home-container">
          <h1>Hi I'm {currentText}</h1>
          <a href="mailto:vlad.krasovski@yahoo.com">
            <Button
              size="md"
              outline
              className="contact-me-button"
              color="info"
            >
              Contact Me
            </Button>
          </a>
        </Container>

        <ul className="sci mb-0">
          <li>
            <a
              href={process.env.REACT_APP_FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href={process.env.REACT_APP_INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href={process.env.REACT_APP_GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href={process.env.REACT_APP_LINKED_IN_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>

        <div className="badges">
          <AwsSolutionArchitectBadge />
        </div>
      </div>
    </section>
  );
};
export default HomeMainSectionContainer;
