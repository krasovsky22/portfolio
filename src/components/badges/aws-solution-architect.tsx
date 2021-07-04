import React from 'react';
import styled from 'styled-components';

const Badge = styled.img``;

const BadgeVerifyUrl =
  'https://www.credly.com/badges/32ec4269-6de1-40cf-87e2-7a8983182b38/public_url';

const AwsSolutionArchitectBadge: React.FC = () => {
  return (
    <a href={BadgeVerifyUrl} target="_blank" rel="noopener noreferrer">
      <Badge
        src="/badges/aws-certified-solutions-architect-associate.png"
        width="150px"
      ></Badge>
    </a>
  );
};

export default React.memo(AwsSolutionArchitectBadge);
