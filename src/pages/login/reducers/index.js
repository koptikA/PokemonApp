import { ACTION_TYPES } from "../../../constants/actionTypes";

export const loginInitialState = {
  isAuth: !!localStorage.getItem("token"),
  isLoading: false,
  errors: null,
  token: localStorage.getItem("token") || null,
  userInfo: {},
};

export const loginPageReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_LOADING:
      return {
        ...state,
          isLoading: true,
          errors: null,
      };

    case ACTION_TYPES.LOGIN_SUCCESS:
      const loginData = action.payload
      const {accessToken, ...userInfo} = loginData;

      localStorage.setItem("token", accessToken);
      return {
        ...state,
          isLoading: false,
          isAuth: true,
          token: accessToken,
          userInfo: userInfo,
      };  

    case ACTION_TYPES.LOGIN_FAIL:
      return {
        ...state,
           isLoading: false,
           isAuth: false,
           errors: action.payload,
      };        

    case ACTION_TYPES.LOGOUT:
      localStorage.removeItem("token");

      return {
        ...state,
          isAuth: false,
          errors: null,
          isLoading: false, 
          userInfo: {},
      };

      default: 
      return state;
  }
}