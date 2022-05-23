import * as ActionTypes from '@constants/actionTypes';

const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated'),
  roles: [],
  loginError: {},
  loading: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.Auth.SAVE_LOGIN:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('isAuthenticated', 'true');
      return {
        ...state,
        isAuthenticated: true,
        roles: action.payload.roles,
      };

    case ActionTypes.Auth.LOGIN_ERROR: {
      return {
        ...state,
        loginError: action.payload,
      };
    }

    case ActionTypes.LOGOUT: {
      localStorage.removeItem('token');
      localStorage.removeItem('isAuthenticated');
      return {
        ...state,
        isAuthenticated: false,
        roles: [],
      };
    }

    case ActionTypes.Auth.LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default:
      return state;
  }
};
