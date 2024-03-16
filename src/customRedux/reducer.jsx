import { ACTION_TYPES } from '../constants/actionTypes'
import { loginInitialStore } from '../pages/login/reducers'

export const initiaValues = {
  loginPage: loginInitialStore,
}

export function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_LOADING:
      return {
        ...state,
        loginPage: {
          ...state.loginPage,
          isLoading: true,
          errors: null,
        },
      };

    case ACTION_TYPES.LOGIN_SUCCESS:
      const {data} = action.payload
      const {accessToken, ...userInfo} = data;

      localStorage.setItem("token", accessToken);
      return {
        ...state,
        loginPage: {
          ...state.loginPage,
          isLoading: false,
          isAuth: true,
          token: accessToken,
          userInfo: userInfo,
        },
      };  

    case ACTION_TYPES.LOGIN_FAIL:
      return {
        ...state,
        loginPage: {
           ...state.loginPage,
           isLoading: false,
           isAuth: false,
           errors: action.payload,
        },
      };        

    case ACTION_TYPES.LOGOUT:
      localStorage.removeItem("token");

      return {
        ...state,
        loginPage: {
          ...state.loginPage,
          isAuth: false,
          errors: null,
          isLoading: false, 
          userInfo: {},
        },
      }

    default:
      return state
  }
}
