import React, { useState } from "react";
import InputFields from "./Components/InputFields"; 
import ResultDisplay from "./Components/ResultDisplay";
function Calculator() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [sum, setSum] = useState("");
  const findSum = () => {
    setSum(input1 + input2); 
  };

  return (
    <>
      <h2>Calculator</h2>
      <InputFields
        setInput1={setInput1}  
        setInput2={setInput2}
      />
      <button onClick={findSum}>Find the sum</button>
      <ResultDisplay sum={sum} />
    </>
  );
}

export default Calculator;

