import { combineReducers } from "redux";
import * as types from '../types';

const defaultState = 0;

function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case types.INCREMENT:
      const MyState = state + 1;
      return MyState;
    case types.DECREMENT:
      const newState = state - 1;
      return newState;
    default:
      return state;
  }
}


export default combineReducers({
  cart: () => "abc",
  counter: counterReducer
});