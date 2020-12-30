import { LOGIN_SUCCESSFUL, LOGOUT_SUCCESSFUL } from "../actionTypes/authActionTypes";

const initialState = {
  isLoggedIn: false,
  profileObj: {},
  id_token: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoggedIn: true,
        profileObj: {...action.payload.profileObj},
        id_token: action.payload.tokenObj.id_token,
      };
    case LOGOUT_SUCCESSFUL:
      return initialState;
    default:
      return state;
  };
};