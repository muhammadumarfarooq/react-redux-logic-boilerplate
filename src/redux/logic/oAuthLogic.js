import { createLogic } from 'redux-logic';
import * as types from '../types';
import { INIT_O_AUTH, getAuthState, initOAuthSuccess } from '../actions';
import store from '../appStore';




const oAuthLogic = createLogic({
  type: types.INIT_O_AUTH,
  latest: true,
  async process({ getState, action }, dispatch, done) { //eslint-disable-line


    window.gapi.load("client: auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "54580018406-4lf8t1qo9qjk6lueppnqt130hfvqgqcl.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          store.dispatch(initOAuthSuccess(window.gapi.auth2.getAuthInstance()));
          store.dispatch(getAuthState(window.gapi.auth2.getAuthInstance().isSignedIn.get()));
          done();
        });
    });






  }
});



// const oAuthLogic = createLogic({
//   type: types.INIT_O_AUTH,
//   latest: true,
//   async process({ getState, action }, dispatch, done) { //eslint-disable-line

//     // window.gapi.load("client: auth2", () => {


// window.gapi.client
//   .init({
//     clientId:
//       "54580018406-4lf8t1qo9qjk6lueppnqt130hfvqgqcl.apps.googleusercontent.com",
//     scope: "email",
//   }).then(() => {
//     store.dispatch(initOAuthSuccess(window.gapi.auth2.getAuthInstance()));
//     store.dispatch(getAuthState(window.gapi.auth2.getAuthInstance().isSignedIn.get()));
//   });

// done();


//     // });


//   }


export default [
  oAuthLogic,
];