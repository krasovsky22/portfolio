import React from 'react';
import { Row } from 'reactstrap';
import WorkCard from '@/components/work-card';

import NetflixClone from '@assets/netflix-clone.png';
import ErrorPage from '@assets/404.png';

const works = [
  {
    title: 'Netflix Clone',
    subTitle: 'Styled Components - Firebase (Firestore & Auth)',
    url: 'http://krasovsky-netflix-clone.s3-website-us-east-1.amazonaws.com/',
    img: NetflixClone,
  },
  {
    title: 'Custom 404 page',
    subTitle: 'Plain css',
    url: 'https://vladkrasovski.com/404',
    img: ErrorPage,
  },
];
const Works: React.FC = () => {
  return (
    <div className="about-me-container container m-0">
      <div className="text-center mb-5">
        <h1 className="section-title">Works</h1>
      </div>
      <Row className="flex-row">
        {works.map((work, i) => (
          <WorkCard key={i}>
            <WorkCard.CardBody src={work.img} href={work.url}>
              <WorkCard.TextContainer>
                <WorkCard.CardTitle>{work.title}</WorkCard.CardTitle>
                <WorkCard.CardSubTitle>{work.subTitle}</WorkCard.CardSubTitle>
              </WorkCard.TextContainer>
            </WorkCard.CardBody>
          </WorkCard>
        ))}
      </Row>
    </div>
  );
};

export default Works;

//I design and code beautifully simple things, and I love what I do.
