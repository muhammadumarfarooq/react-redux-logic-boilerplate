import { createLogic } from 'redux-logic';
import * as types from '../types';
import jsonPlaceholder from '../../apis/jsonPlaceHolder';
import { getDataSuccess } from '../actions';
import store from '../appStore';

const dataLogic = createLogic({
  type: types.GET_DATA,
  latest: true,
  async process({ getState, action }, dispatch, done) { //eslint-disable-line

    // // first logout from server,
    const response = await jsonPlaceholder.get('/todos')
    store.dispatch(getDataSuccess(response.data));
    done();

  }
});

// const resetUserPasswordLogic = createLogic({
//   type: types.RESET_USER_PASSWORD,
//   latest: true,
//   process({ getState, action }, dispatch, done) { //eslint-disable-line
//     // axios.post(url + '/user/reset-password', {
//     //   username: action.payload.username,
//     //   password: action.payload.password,
//     //   str: action.payload.str
//     // })
//     //   .then((resp) => {
//     //     dispatch(statusActions.resetPasswordStatus(resp.data));
//     //     done();
//     //   });
//   }
// });


export default [
  dataLogic,
];