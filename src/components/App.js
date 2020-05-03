import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, getData, initOAuth } from '../redux/actions';
function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const data = useSelector(state => state.data);


  React.useEffect(() => {
    dispatch(initOAuth());
  }, []);


  return (
    <div className="app">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(getData())}>Get Data from API using Redux Logic</button>
      <h1>{data.length}</h1>
    </div>
  );
}

export default App;
