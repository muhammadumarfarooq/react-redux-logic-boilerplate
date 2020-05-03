import logoutLogic from './logoutLogic';
import dataLogic from './dataLogic';
import oAuthLogic from './oAuthLogic';

export default [
  ...logoutLogic,
  ...dataLogic,
  ...oAuthLogic,
];