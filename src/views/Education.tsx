import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
} from 'reactstrap';

const Education: React.FC = () => {
  return (
    <div className="experience-container">
      <div className="text-center mb-5">
        <h1 className="section-title">Education & Experience</h1>
      </div>
      <Row>
        <Col sm={12} md={6}>
          <Card className="experience-card mb-3">
            <CardTitle>
              <CardHeader>
                <h4>2018 - 2019</h4>
                <h3>Software Engineering</h3>
              </CardHeader>
            </CardTitle>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias voluptates esse rem inventore similique cumque nostrum
                explicabo. Pariatur vitae eveniet culpa officiis inventore ea
                totam fugiat nulla similique, aperiam impedit!
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="experience-card mb-3">
            <CardTitle>
              <CardHeader>
                <h4>2018 - 2019</h4>
                <h3>Software Engineering</h3>
              </CardHeader>
            </CardTitle>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias voluptates esse rem inventore similique cumque nostrum
                explicabo. Pariatur vitae eveniet culpa officiis inventore ea
                totam fugiat nulla similique, aperiam impedit!
              </p>
            </CardBody>
          </Card>
        </Col>

const Education: React.FunctionComponent<injectedLoadableProps<
  PreviouExperienceType
>> = ({ data }: injectedLoadableProps<PreviouExperienceType>) => {
  console.log('here', data);

        <Col sm={12} md={6}>
          <Card className="experience-card mb-3">
            <CardTitle>
              <CardHeader>
                <h4>2018 - 2019</h4>
                <h3>Software Engineering</h3>
              </CardHeader>
            </CardTitle>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias voluptates esse rem inventore similique cumque nostrum
                explicabo. Pariatur vitae eveniet culpa officiis inventore ea
                totam fugiat nulla similique, aperiam impedit!
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Education;
