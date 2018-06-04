import React from 'react';

const myStyles = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: "1000",
  backgroundColor: "rgba(82, 82, 97, 0.479)"
};

const Overlay = (props) => (
  <div onClick={props.toggleCallback} style={myStyles}>
    {props.children}
  </div>
);

export default Overlay;