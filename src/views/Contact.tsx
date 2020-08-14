import React from 'react';
import {
  Row,
  Col,
  Card,
  CardSubtitle,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import {
  faEnvelope,
  faMobileAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact: React.FC = () => {
  return (
    <div className="contact-container container">
      <div className="text-center mb-5">
        <h1 className="section-title">Get in touch</h1>
      </div>
      <Row>
        <Col md={4} sm={12}>
          <Card>
            <CardTitle>
              <FontAwesomeIcon icon={faMobileAlt} />
            </CardTitle>
            <CardSubtitle>+111 111 1111</CardSubtitle>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card>
            <CardTitle>
              <FontAwesomeIcon icon={faEnvelope} />
            </CardTitle>
            <CardSubtitle>email@address.com</CardSubtitle>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card>
            <CardTitle>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </CardTitle>
            <CardSubtitle>Los Angeles, United States</CardSubtitle>
          </Card>
        </Col>
      </Row>

      <Form className="contact-form">
        <Row form>
          <Col md={6} sm={12}>
            <FormGroup>
              <Input
                type="text"
                name="full_name"
                placeholder="Your Full Name"
              />
            </FormGroup>
          </Col>
          <Col md={6} sm={12}>
            <FormGroup>
              <Input type="email" name="email" placeholder="Your Email" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input type="text" name="subject" placeholder="Subject" />
        </FormGroup>
        <FormGroup>
          <Input type="textarea" name="message" placeholder="Message" />
        </FormGroup>
        <FormGroup row>
          <Col md={8} />
          <Col md={4}>
            <Button block>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Contact;
