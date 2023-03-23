import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const preimClick = (buttonName) => {
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  return (
    <div className="calculate">
      <div className="screen">{state.next || state.total}</div>
      <div className="btns">
        <button type="button" className="btn" onClick={() => preimClick('AC')}>AC</button>
        <button type="button" className="btn" onClick={() => preimClick('+/-')}>+/-</button>
        <button type="button" className="btn" onClick={() => preimClick('%')}>%</button>
        <button type="button" className="btn btn1" onClick={() => preimClick('÷')}>÷</button>
        <button type="button" className="btn" onClick={() => preimClick('7')}>7</button>
        <button type="button" className="btn" onClick={() => preimClick('8')}>8</button>
        <button type="button" className="btn" onClick={() => preimClick('9')}>9</button>
        <button type="button" className="btn btn1" onClick={() => preimClick('x')}>*</button>
        <button type="button" className="btn" onClick={() => preimClick('4')}>4</button>
        <button type="button" className="btn" onClick={() => preimClick('5')}>5</button>
        <button type="button" className="btn" onClick={() => preimClick('6')}>6</button>
        <button type="button" className="btn btn1" onClick={() => preimClick('-')}>-</button>
        <button type="button" className="btn" onClick={() => preimClick('1')}>1</button>
        <button type="button" className="btn" onClick={() => preimClick('2')}>2</button>
        <button type="button" className="btn" onClick={() => preimClick('3')}>3</button>
        <button type="button" className="btn btn1" onClick={() => preimClick('+')}>+</button>
        <button type="button" className="btn zero" onClick={() => preimClick('0')}>0</button>
        <button type="button" className="btn" onClick={() => preimClick('.')}>.</button>
        <button type="button" className="btn btn1 preim" onClick={() => preimClick('=')}>=</button>
      </div>

    </div>
  );
}
