import React, { useState } from "react";
import BigNumber from "../BigNumber";
import DisplayCount from "../DisplayCount";


const Counter = () => {

  const [count, setCount] = useState(0);
  const label = "useEffect";

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>Prop counter: <BigNumber data={count} /></p>
      useEffect count: <DisplayCount data={{label, count}} />
    </div>
  )

};

export default Counter;