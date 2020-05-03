import * as types from '../types';

export function increment() {
  return {
    type: types.INCREMENT
  }
}

export function getData() {
  return {
    type: types.GET_DATA
  }
}

export function getDataSuccess(data) {
  console.log(data);
  return {
    type: types.GET_DATA_SUCCESS,
    payload: data
  }
}

export function decrement() {
  return {
    type: types.DECREMENT
  }
}