import React from 'react';


const TextEditArea = (props) => (

  <textarea
   autoFocus
   className="form-control container-fluid my-area"
   value={props.value}
   onChange={props.handleChange} />

);

export default TextEditArea;