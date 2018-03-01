import React from 'react';

const HeaderText = props => (
  <div className="row justify-content-center">
    <h4 className={props.myClass}>{props.text}</h4>
  </div>
);

export default HeaderText;