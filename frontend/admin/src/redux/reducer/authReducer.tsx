import * as ActionTypes from '@constants/actionTypes';
import { retry } from 'redux-saga/effects';

const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated'),
  roles: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.Auth.LOGIN: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        roles: action.payload.roles,
      };
    }

    default:
      return state;
  }
};
