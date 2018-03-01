import React from 'react';


const TextEditArea = (props) => (

  <textarea
   autoFocus
   className="form-control my-area"
   value={props.value}
   onChange={props.handleChange} />

);

export default TextEditArea;