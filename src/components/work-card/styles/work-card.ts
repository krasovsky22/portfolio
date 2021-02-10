import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;

  width: 300px;
  height: 300px;

  gap: 20px;
  margin: 20px;
  margin-bottom: 50px;
  //align-items: center;
  flex-direction: column;
  background-color: #add8e62b;
  justify-content: space-between;

  a {
    height: 100%;
    margin: 10px;
    position: relative;
  }
`;

export type CardBodyType = {
  src: string;
};

export const CardTitle = styled.h1`
  margin-top: 80%;
  font-size: 20px;
  text-decoration: underline;
  font-weight: 500;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const CardSubTitle = styled.h2`
  font-size: 12px;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const CardBody = styled.div<CardBodyType>`
  width: auto;
  height: 100%;

  border-radius: 50%;
  background-color: transparent;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  cursor: pointer;
  position: relative;

  transition: transform 0.5s;

  &:hover {
    transform: scale(1.3);
    z-index: 99;

    ${CardTitle}, ${CardSubTitle} {
      display: block;
    }
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  bottom: -50px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
