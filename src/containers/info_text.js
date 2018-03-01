import React from 'react';

const InfoText = props => (
  <div className="row justify-content-center">
    <p className={props.myClass}>{props.text}</p>
  </div>
);

export default InfoText;