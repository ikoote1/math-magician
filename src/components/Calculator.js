import Screen from './Screen';
import React, {useState} from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total : null,
    next : null,
    operation: null
  });

  const preimClick = (buttonName) =>{
    const newState = calculate(state, buttonName);
    setState(newState);
  }


  return (
    <div className="calculate">
      <Screen />
      <div className="btns">
        <button type="button" className="btn" onClick={()=>preimClick()}>AC</button>
        <button type="button" className="btn" onClick={()=>preimClick()}>+/-</button>
        <button type="button" className="btn" onClick={()=>preimClick()}>%</button>
        <button type="button" className="btn btn1" onClick={()=>preimClick()}>/</button>
        <button type="button" className="btn" onClick={()=>preimClick()}>7</button>
        <button type="button" className="btn" onClick={()=>preimClick()}>8</button>
        <button type="button" className="btn" onClick={()=>preimClick()}>9</button>
        <button type="button" className="btn btn1" onClick={()=>preimClick()}>*</button>
        <button type="button" className="btn" onClick={()=>preimClick()}>4</button>
        <button type="button" className="btn" onClick={()=>preimClick()}>5</button>
        <button type="button" className="btn" onClick={()=>preimClick()}>6</button>
        <button type="button" className="btn btn1" onClick={()=>preimClick()}>-</button>
        <button type="button" className="btn" onClick={()=>preimClick()}>1</button>
        <button type="button" className="btn" onClick={()=>preimClick()}>2</button>
        <button type="button" className="btn" onClick={()=>preimClick()}>3</button>
        <button type="button" className="btn btn1" onClick={()=>preimClick()}>+</button>
        <button type="button" className="btn zero" onClick={()=>preimClick()}>0</button>
        <button type="button" className="btn" onClick={()=>preimClick()}>.</button>
        <button type="button" className="btn btn1" onClick={()=>preimClick()}>=</button>
      </div>

    </div>
  );
}
