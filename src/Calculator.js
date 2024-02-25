import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        if (input.trim() === "") {
          throw new Error("Error");
        }
        const result = eval(input);
        setOutput(isNaN(result) ? "NaN" : result || "");
      } catch (error) {
        setOutput("Error");
      }
    } else if (value === "C") {
      setInput("");
      setOutput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input className="input" type="text" value={input} readOnly />
      <div className="output">{output}</div>
      <div className="buttons">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"].map(
          (value) => (
            <button key={value} onClick={() => handleClick(value.toString())}>
              {value}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
