import React from 'react';
import CloseButton from './close_button';

const ModalComponent = (props) => {
  const showing = props.isShowing ? "show" : null
  return <div className={"customModal " + showing}>
    <div className="customContent">
      <div className="customHeader"><h4>Oops!</h4></div>
      <CloseButton/>
      <hr style={{width: "90%"}} />
      <div className="customModalBody">
        {props.children}
      </div>
    </div>
  </div>;
};

export default ModalComponent;