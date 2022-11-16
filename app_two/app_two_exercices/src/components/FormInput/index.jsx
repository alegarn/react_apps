import React from "react";
import { useState } from 'react';

const FormInput = () => {
  const [value, setValue] = useState('');
  
  const downCase = e => {
    setValue(e.target.value.toLowerCase());
  };

  return (
    <React.Fragment>
      <input type="text" value={value} className="form-control" onChange={downCase} />   
    </React.Fragment>
  );
}

export default FormInput;