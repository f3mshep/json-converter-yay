import React from 'react';

const ModalComponent = (props) => {
  const showing = props.isVisible ? "show" : "fade"
  return <div className={"customModal " + showing}>
    {props.children}
  </div>;
};

export default ModalComponent;