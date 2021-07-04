import HomeMainSectionContainer from '@/containers/home-main-section';
import HomeResumeSectionContainer from '@/containers/home-resume-section';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <HomeMainSectionContainer />
      <HomeResumeSectionContainer />
    </>
  );
};

export default Home;
