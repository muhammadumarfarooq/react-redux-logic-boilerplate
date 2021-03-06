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

function dataReducer(state = [], action) {
  switch (action.type) {
    case types.GET_DATA_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

function oAuth(state = [], action) {
  switch (action.type) {
    case types.INIT_O_AUTH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

function oAuthState(state = null, action) {
  switch (action.type) {
    case types.GET_AUTH_STATE:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  cart: () => "abc",
  counter: counterReducer,
  data: dataReducer,
  oAuth,
  oAuthState,
});