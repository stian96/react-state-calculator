
import React, { useState } from "react";
import "./App.css"

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operators = ['+', '-', '*', '÷'];

  const clearNum1 = () => setNum1('');
  const clearNum2 = () => setNum2('');

  const calculateAnswer = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operator) {
      case '+': setResult(number1 + number2);
        break;
      case '-': setResult(number1 - number2);
        break;
      case '*': setResult(number1 * number2);
        break;
      case '÷': setResult(number1 / number2);
        break;
    }
  }

  const handleNumberClick = (number, isNum1=true) => {
    if (isNum1) {
      if (num1 === '0' && number === '0') 
        return;
      if (num1 === '0') {
        setNum1(number);
      }
      else {
        setNum1((prev) => prev + number.toString());
      }
    }
    else {
      if (num2 === '0' && number === '0') 
        return;
      if (num2 === '0') {
        setNum2(number);
      }
      else {
        setNum2((prev) => prev + number.toString())
      }
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1 === '' ? 0 : num1}</p>
        <div className="numbers">
          { numbers.map((number) => (
            <button key={number} onClick={() => handleNumberClick(number, true)}>
              {number}
            </button>
          ))}
          <button onClick={clearNum1}>Clear</button>
        </div>
      </div>
      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          { operators.map((operator, index) => (
            <button key={index} onClick={() => setOperator(operator)}>{operator}</button>
          ))}
        </div>
      </div>
      <div className="panel">
        <p>{num2 === '' ? 0 : num2}</p>
        <div className="numbers">
        { numbers.map((number) => (
            <button key={number} onClick={() => handleNumberClick(number, false)}>
              {number}
            </button>
          ))}
          <button onClick={clearNum2}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{isNaN(result) ? 0 : result}</p>
        <div>
          <button onClick={calculateAnswer}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
