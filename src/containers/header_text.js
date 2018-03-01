import React from 'react';

const HeaderText = props => (
  <div className="row justify-content-center">
    <h2 className={props.myClass}>{props.text}</h2>
  </div>
);

export default HeaderText;