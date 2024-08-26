import React, { useState } from 'react';
import "../css/Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput('');
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button key={num} onClick={() => handleInput(num.toString())}>
            {num}
          </button>
        ))}
      </div>
      <div className="flex">
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('/')}>/</button>
        <button onClick={clear}>C</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
