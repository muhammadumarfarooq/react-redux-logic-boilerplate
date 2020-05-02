import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';
function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <div className="app">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
}

export default App;
