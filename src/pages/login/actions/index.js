import { ACTION_TYPES } from "../../../constants/actionTypes";

export const loginLoading = () => {
    return {
        type: ACTION_TYPES.LOGIN_LOADING,
    };
};

export const loginSuccess = (data) => {
    return {
        type: ACTION_TYPES.LOGIN_SUCCESS,
        payload: data.data,
    };
};

export const loginFail = (data) => {
    return {
        type: ACTION_TYPES.LOGIN_FAIL,
        payload: data,
    };
};

export const logoutAction = () => {
    return {
        type: ACTION_TYPES.LOGOUT,
    };
};