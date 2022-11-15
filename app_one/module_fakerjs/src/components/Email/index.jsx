import React from 'react';
import Button from 'react-bootstrap/Button';


const Email = (props) => {

  const {firstName, lastName} = props.data;
  const mailAddress= `${lastName.toLowerCase()}.${firstName.toLowerCase()}@gmail.com`;
  
  return(
    <Button href={`mailto:${mailAddress}`} >Send a message</Button>
  );
};

export default Email;