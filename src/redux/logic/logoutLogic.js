import { createLogic } from 'redux-logic';
import * as types from '../types';

const logoutLogic = createLogic({
  type: types.LOGOUT,
  latest: true,
  process({ getState, action }, dispatch, done) { //eslint-disable-line

    // // first logout from server,
    // axios.get(url + '/user/logout')
    //   .then(() => {
    //     // then delete session
    //     sessionService.deleteSession()
    //       .then(() => {
    //         // then delete user from session
    //         sessionService.deleteUser()
    //           .then(() => {
    //             // dispatch({type: types.LOGOUT_SUCCESS});
    //             toast.info('Logout Successful');
    //             dispatch(loginActions.loginStatus({}));
    //             dispatch(productActions.deleteDashboardProducts());
    //             dispatch(categoriesActions.deleteDashboardCategories());
    //             done();
    //           });
    //       });
    //   });
  }
});

const resetUserPasswordLogic = createLogic({
  type: types.RESET_USER_PASSWORD,
  latest: true,
  process({ getState, action }, dispatch, done) { //eslint-disable-line
    // axios.post(url + '/user/reset-password', {
    //   username: action.payload.username,
    //   password: action.payload.password,
    //   str: action.payload.str
    // })
    //   .then((resp) => {
    //     dispatch(statusActions.resetPasswordStatus(resp.data));
    //     done();
    //   });
  }
});


export default [
  logoutLogic,
  resetUserPasswordLogic,
];