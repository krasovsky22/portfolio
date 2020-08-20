import React, { useState, useCallback } from 'react';

import PlaneExperiment from 'experiment-css-responsive-plane';
import PageNotFoundError from 'experiment-page-not-found';

import { Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';

import 'experiment-page-not-found/dist/index.css';
import 'experiment-css-responsive-plane/dist/index.css';

type ActiveComponentType = {
  title: string;
  component: React.ReactNode;
};
const PlaneComponent = <PlaneExperiment />;
const PageNotFoundErrorComponent = <PageNotFoundError />;

const activeComponents: ActiveComponentType[] = [
  {
    component: PlaneComponent,
    title: 'Responsive Flying Plane using pure css',
  },
  {
    component: PageNotFoundErrorComponent,
    title: 'Fun 404 Page Not Found',
  },
];

const Playground: React.FC = () => {
  const [activeExperimentIndex, setActiveExperimentIndex] = useState<
    number | null
  >(null);
  const closeModal = useCallback(() => setActiveExperimentIndex(null), [
    setActiveExperimentIndex,
  ]);

  const openModal = useCallback(
    (index: number) => () => setActiveExperimentIndex(index),
    [setActiveExperimentIndex]
  );

  return (
    <div className="playground-container container">
      <Row>
        {activeComponents.map(({ component, title }, index) => (
          <Col
            key={index}
            md={3}
            onClick={openModal(index)}
            className="cursor-pointer m-2"
            title={title}
          >
            {component}
          </Col>
        ))}
      </Row>

      {activeExperimentIndex !== null && (
        <Modal
          isOpen={activeExperimentIndex !== null}
          toggle={closeModal}
          size="xl"
          centered={true}
        >
          <ModalHeader toggle={closeModal}>Preview</ModalHeader>
          <ModalBody className="p-0">
            {activeComponents[activeExperimentIndex].component}
          </ModalBody>
        </Modal>
      )}
    </div>
  );
};

export default Playground;
