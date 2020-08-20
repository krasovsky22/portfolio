import React from 'react';
import PageNotFoundError from 'experiment-page-not-found';
import 'experiment-page-not-found/dist/index.css';

const Error404: React.FC = () => {
  return (
    <div className="page-not-found-container">
      <PageNotFoundError />
    </div>
  );
};

export default Error404;
