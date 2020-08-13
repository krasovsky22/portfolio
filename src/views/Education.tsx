import React from 'react';
import { Row, Col, Card, CardTitle, CardBody, CardHeader } from 'reactstrap';
import { uid } from 'react-uid';
import { PreviousExperienceDatabase } from '@/database/firebase';
import withLoadable, { injectedLoadableProps } from '@/database/withLoadable';

type PreviouExperienceType = {
  company: string;
  description: string[];
  end_date: string;
  start_date: string;
  title: string;
};

type EducationProps = injectedLoadableProps<PreviouExperienceType>;

const Education: React.FunctionComponent<injectedLoadableProps<
  PreviouExperienceType
>> = ({ data }: injectedLoadableProps<PreviouExperienceType>) => {
  return (
    <div className="experience-container">
      <div className="text-center mb-5">
        <h1 className="section-title">Education & Experience</h1>
      </div>
      <Row>
        {data.map((prevExperience, index) => (
          <Col sm={12} md={6} key={index} className="mb-3">
            <Card className="experience-card">
              <CardTitle>
                <CardHeader>
                  <h4>
                    <b>{prevExperience.company}</b> ({prevExperience.start_date}{' '}
                    - {prevExperience.end_date})
                  </h4>
                  <h3>{prevExperience.title} asd</h3>
                </CardHeader>
              </CardTitle>
              <CardBody>
                <ul>
                  {prevExperience.description.map((desc, index) => (
                    <li key={uid(desc, index)}>{desc}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default withLoadable<PreviouExperienceType>(
  Education,
  PreviousExperienceDatabase
);
