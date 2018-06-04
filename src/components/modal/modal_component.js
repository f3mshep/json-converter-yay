import React from 'react';
import CloseButton from './close_button';

const ModalComponent = (props) => {
  const showing = props.isShowing ? "show" : null
  return <div className={"customModal " + showing}>
    <div className="customContent">
      <CloseButton/>
      <div className="customModalBody">
        {props.children}
      </div>
    </div>
  </div>;
};

export default ModalComponent;