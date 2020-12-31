import { LOGIN_SUCCESSFUL, LOGOUT_SUCCESSFUL } from "./actionTypes/authActionTypes";

export const loginSuccess = googleUser => ({
  type: LOGIN_SUCCESSFUL,
  payload: googleUser,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESSFUL,
});

export const manualLoginSuccess = () => ({
  // return (dispatch => {

  // })
});

export const manualLogoutSuccess = () => ({
  
});