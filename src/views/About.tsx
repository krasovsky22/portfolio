import React from 'react';
import { Row, Col, Card, CardTitle, CardBody, CardText } from 'reactstrap';
import withLoadable, { injectedLoadableProps } from '@/database/withLoadable';
import { AboutMeDatabase, AboutMeDescriptionType } from '@/database/firebase';

const About: React.FunctionComponent<injectedLoadableProps<
  AboutMeDescriptionType
>> = ({ data }: injectedLoadableProps<AboutMeDescriptionType>) => {
  return (
    <div className="about-me-container container m-0">
      <div className="text-center mb-5">
        <h1 className="section-title">About Me</h1>
      </div>
      <Row>
        {data.map((data, index) => (
          <Col key={index} md={4} sm={12}>
            <Card>
              <CardBody className="p-0">
                <CardTitle className={`about-color-${index}`}>
                  <h2>{data.title}</h2>
                </CardTitle>

                <div className="content">
                  <CardText tag="div">
                    {data.description ?? (
                      <dl>
                        {data.sub_descriptions?.map((description, index) => (
                          <dd key={index}>{description}</dd>
                        ))}
                      </dl>
                    )}
                  </CardText>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default withLoadable<AboutMeDescriptionType>(About, AboutMeDatabase);

//I design and code beautifully simple things, and I love what I do.
