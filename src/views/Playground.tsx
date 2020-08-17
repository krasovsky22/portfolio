import React, { useState, useCallback } from 'react';

import PlaneExperiment from 'experiment-css-responsive-plane';
import { Row, Col } from 'reactstrap';

import 'experiment-css-responsive-plane/dist/index.css';

const PlaneComponent = <PlaneExperiment />;
const activeComponents = [PlaneComponent];

const Playground: React.FC = () => {
  const [activeExperimentIndex, setActiveExperimentIndex] = useState<number>(0);

  return (
    <div className="playground-container container m-0 p-0">
      <div className="text-center mb-5">
        <h1 className="section-title">Experiments</h1>
      </div>
      <Row className="m-auto p-0">
        <Col md="12">{activeComponents[activeExperimentIndex]}</Col>
      </Row>
      <Row className="navigation">
        {activeComponents.map((component, index) => (
          <Col key={index} onClick={() => setActiveExperimentIndex(index)}>
            {component}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Playground;
