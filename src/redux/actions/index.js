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
export function initOAuth() {
  return {
    type: types.INIT_O_AUTH,
  }
}

export function initOAuthSuccess(data) {
  return {
    type: types.INIT_O_AUTH_SUCCESS,
    payload: data
  }
}

export function getAuthState(authState) {
  return {
    type: types.GET_AUTH_STATE,
    payload: authState
  }
}