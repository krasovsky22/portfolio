import React from 'react';
import { WithChildrenType } from '@components/common-types';
import {
  Container,
  CardBody,
  CardBodyType,
  CardTitle,
  CardSubTitle,
  TextContainer,
} from './styles/work-card';

const WorkCard = ({ children, ...rest }: WithChildrenType) => {
  return <Container {...rest}>{children}</Container>;
};

type WorkCardProps = {
  href: string;
};
WorkCard.CardBody = ({
  href,
  children,
  ...rest
}: WithChildrenType & CardBodyType & WorkCardProps) => {
  return (
    <CardBody {...rest} onClick={() => window.open(href, '_blank')}>
      {children}
    </CardBody>
  );
};

WorkCard.TextContainer = ({ children, ...rest }: WithChildrenType) => {
  return <TextContainer {...rest}>{children}</TextContainer>;
};

WorkCard.CardTitle = ({ children, ...rest }: WithChildrenType) => {
  return <CardTitle {...rest}>{children}</CardTitle>;
};

WorkCard.CardSubTitle = ({ children, ...rest }: WithChildrenType) => {
  return <CardSubTitle {...rest}>{children}</CardSubTitle>;
};

export default WorkCard;
