import React from 'react';

const CloseButton = (props) => {
  return <div style={{ position: "relative", marginRight: "6px" }}>
      <button className="customClose" onClick={props.handleClose}>
        <span>&#10006;</span>
      </button>
    </div>;
};

export default CloseButton