import React from 'react';
import "./App.css";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>Using react and redux</h4>

      <div className="quantity">
      <a className="quantity_minus" title="Decrement" 
      onClick={()=> (myState>0 ? dispatch(decNumber(5)) : {myState} )}><span>-</span></a>
      
      <input name='quantity' type='text' className='quantity_input' value={myState}></input>
      <a className="quantity_plus" title="Increment" onClick={()=> dispatch(incNumber(5))}><span>+</span></a>

      </div>

      </div>
    
    </>
  )
}

export default App