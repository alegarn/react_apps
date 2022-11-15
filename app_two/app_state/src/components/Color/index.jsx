import React from "react";
import { useState } from 'react';

const Colors = () => {

  const [lastColor, setColor] = useState(false);

  const changeColor = () => {
    setColor(!lastColor);
    console.log('lastColor');
  };
  

  return(
    <div className="Color">
      <div className="container">
        <button
          className={lastColor ? "p-4 h-50 w-25 bg-primary" : "p-4 h-50 w-25 bg-secondary" }
          onClick={changeColor}>{lastColor ? 'bg-primary' : 'bg-secondary'}
        </button>
      </div>
    </div>
  )
    
  
};

export default Colors;