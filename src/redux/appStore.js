import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';
import { createLogicMiddleware } from 'redux-logic';
import rootLogic from './logic/';
import axios from 'axios';

// dependencies for Logic
const deps = {
  httpClient: axios
}

// create middleware
const logicMiddleware = createLogicMiddleware(rootLogic, deps);

// prepare middleware to ensure Redux can use it 
const composeMiddleware = compose(applyMiddleware(logicMiddleware));

export default createStore(rootReducer, composeMiddleware);


// NOTE: if we using just redux and not any middleware then export just this line and comment the above line
export default createStore(rootReducer, composeMiddleware);