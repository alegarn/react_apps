import React from "react";
import Button from 'react-bootstrap/Button';



const Phone = (props) => {
  const personnalNumber = props.data;
  return(
    <Button href={`tel:${personnalNumber}`} className="p-3">Call</Button>
  )
  
};

export default Phone;