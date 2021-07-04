import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components/macro';

const SectionInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0;
  min-height: auto;
  p {
    margin: 0;
  }
`;
const AboutMeDiv = styled.div``;
const ExperienceDiv = styled.div``;
const SkillsDiv = styled.div``;

const ContentGridContainer = styled.div`
  display: grid;
  height: max-content;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-flow: dense;
`;

const ExperienceInnerDiv = styled.div``;

type WorkHistoryRecordType = {
  jobTitle: string;
  company: string;
  dates: string;
};

const WorkHistoryData: WorkHistoryRecordType[] = [
  {
    jobTitle: 'Software Architect',
    company: 'Ambry Genetics, Konica Minolta',
    dates: '2016 - now',
  },
  {
    jobTitle: 'Senior Software Developer',
    company: 'Cloud Marketing Inc',
    dates: 'Jan 2016 - May 2016 ',
  },
  {
    jobTitle: 'Senior Software Developer',
    company: 'Airsoft Megastore',
    dates: '2015 - 2016',
  },
  {
    jobTitle: 'Web Developer',
    company: 'Vibe Media Inc',
    dates: '2012 - 2015',
  },
];

const HomeResumeSectionContainer: React.FC = React.memo(() => {
  return (
    <section>
      <SectionInnerDiv>
        <AboutMeDiv>
          <h2>About Me</h2>
          <p className="info-text m-0">
            I am a full stack developer, architect and inventor. From Russia,
            based in .Los Angeles.
          </p>
          <p className="comments-text">// 10+ years of experience</p>
        </AboutMeDiv>

        <SkillsDiv>
          <h3 className="my-3">Main Skills</h3>
          <ContentGridContainer>
            <div>
              <p className="comments-text">Frontend development</p>
              <p className="comments-text">Backend Development</p>
              <br />
              <p className="comments-text">Symfony</p>
              <p className="comments-text">Laravel</p>
            </div>

            <div>
              <p className="comments-text">React, Next.js, Vue</p>
              <p className="comments-text">Three.js, D3</p>
              <br />
              <p className="comments-text">PHP</p>
              <p className="comments-text">Node</p>
            </div>

            <div>
              <p className="comments-text">AWS</p>
              <p className="comments-text">Firebase</p>
            </div>

            <div>
              <p className="comments-text">Team player</p>
              <p className="comments-text">Strategic thinking</p>
              <p className="comments-text">Storytelling</p>
            </div>
          </ContentGridContainer>
        </SkillsDiv>

        <ExperienceDiv>
          <h3 className="my-3">Experience</h3>
          <ContentGridContainer>
            {WorkHistoryData.map((data) => (
              <ExperienceInnerDiv key={uuid.v4()}>
                <b className="info-text">{data.jobTitle}</b>
                <p className="comments-text">@ {data.company}.</p>
                <p>{data.dates}</p>
              </ExperienceInnerDiv>
            ))}
          </ContentGridContainer>
        </ExperienceDiv>
      </SectionInnerDiv>
    </section>
  );
});

export default HomeResumeSectionContainer;
