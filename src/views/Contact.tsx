import {
  ContactMeFieldsType,
  InsertContactMeDataQuery,
} from '@/database/firebase';
import {
  faEnvelope,
  faMapMarkerAlt,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  Card,
  CardSubtitle,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
} from 'reactstrap';

const Contact: React.FC = () => {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<ContactMeFieldsType>({
    defaultValues: { email: '', subject: '' },
  });
  const onSubmit = async (data: ContactMeFieldsType) => {
    setIsSaving(true);
    await InsertContactMeDataQuery(data);
    setIsSaving(false);
    setIsSaved(true);
  };

  return (
    <div className="contact-container container">
      <div className="text-center mb-5">
        <h1 className="section-title">Get in touch</h1>
      </div>
      <Row>
        <Col md={4} sm={12}>
          <Card>
            <a href={`tel:${process.env.REACT_APP_PHONE_NUMBER}`}>
              <CardTitle>
                <FontAwesomeIcon icon={faMobileAlt} />
              </CardTitle>
              <CardSubtitle>{process.env.REACT_APP_PHONE_NUMBER}</CardSubtitle>
            </a>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card>
            <a
              href={`mailto:${process.env.REACT_APP_EMAIL_ADDRESS}?subject=Hello Vlad Krasovski`}
            >
              <CardTitle>
                <FontAwesomeIcon icon={faEnvelope} />
              </CardTitle>

              <CardSubtitle>{process.env.REACT_APP_EMAIL_ADDRESS}</CardSubtitle>
            </a>
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

      <Form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <Row form>
          <Col md={6} sm={12}>
            <FormGroup>
              <Controller
                as={
                  <Input
                    type="text"
                    required
                    disabled={isSaved}
                    placeholder="Your Full Name"
                  />
                }
                control={control}
                name="name"
              />
            </FormGroup>
          </Col>
          <Col md={6} sm={12}>
            <FormGroup>
              <Controller
                as={
                  <Input
                    type="email"
                    disabled={isSaved}
                    placeholder="Your Email"
                  />
                }
                control={control}
                name="email"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Controller
            as={
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                disabled={isSaved}
              />
            }
            name="subject"
            control={control}
          />
        </FormGroup>
        <FormGroup>
          <Controller
            as={
              <Input
                type="textarea"
                name="message"
                disabled={isSaved}
                placeholder="Message"
                required
              />
            }
            control={control}
            name="message"
          />
        </FormGroup>
        <FormGroup row>
          <Col md={8} />
          <Col md={4}>
            {isSaving && <Button block>Sending...</Button>}
            {isSaved && (
              <Button block color="success">
                Sent
              </Button>
            )}
            {!isSaving && !isSaved && <Button block>Send</Button>}
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Contact;
