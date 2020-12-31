import complaintsReducer from '../client/redux/reducers/complaintsReducer';
import authReducer from '../client/redux/reducers/authReducer';
import { SUCCESSFUL_CREATE_COMPLAINTS, SUCCESSFUL_DELETE_COMPLAINTS, SUCCESSFUL_GET_COMPLAINTS } from "../client/redux/actionTypes/complaintsActionTypes";
import { LOGIN_SUCCESSFUL, LOGOUT_SUCCESSFUL } from "../client/redux/actionTypes/authActionTypes";

describe('Complaints reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      complaints: []
    }
  });

  describe('get complaints', () => {
    it('should update complaints to be array with data', () => {
      const array = [1, 2, 3];
      const action = {
        type: SUCCESSFUL_GET_COMPLAINTS,
        payload: array
      }
      expect(complaintsReducer(state, action)).toEqual({
        complaints: [1, 2, 3]
      });
      expect(complaintsReducer(state, action)).not.toEqual({
        complaints: [1, 2, 4]
      });
    })
  })
})

describe('Auth reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      isLoggedIn: false,
      profileObj: {},
      id_token: ''
    }
  });

  describe('Log in', () => {
    it('should set isLoggedIn to be true', () => {
      const action = {
        type: LOGIN_SUCCESSFUL,
        payload: {
          profileObj: {user: 'someUser'},
          tokenObj: {id_token: 'someToken'}
        },
      }

      expect(authReducer(state, action)).toEqual({
        isLoggedIn: true,
        profileObj: {user: 'someUser'},
        id_token: 'someToken'
      })
    });
  });

  describe('Log out', () => {
    it('should return initial state', () => {
      const action = {
        type: LOGOUT_SUCCESSFUL,
      }
      expect(authReducer(state, action)).toEqual(state);
    })
  })
})