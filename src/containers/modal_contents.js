import React from 'react';

const ModalContent = props => (
  <div className="container">
    <div style={{fontSize: "18px"}} className="row justify-content-center">{props.children}</div>
  </div>
);

export default ModalContent;