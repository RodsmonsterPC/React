import { useState } from "react";
import index from "./index.css";

const Operator = (props) => {
    
    
  const [valueStart, setNewValue] = useState(props.value);
  if(valueStart < 0){
    setNewValue(0)
}

  const sum = () =>   setNewValue(valueStart + 1);
  const rest = () =>  setNewValue(valueStart - 1);

  return (
    <div className="h1">
      <label>Suma={valueStart}</label>
      <div className="operatorButtons">
      <button onClick={sum} >Sumar</button>
      <button onClick={rest}>Restar</button>
      </div>
    </div>
    
  );
  
};

export default Operator;
