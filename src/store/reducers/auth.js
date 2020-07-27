
import * as actions from '../actions/actionTypes'

const initialState = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    user: {},
    authMsg: ""
}

export default (state=initialState, action) => {
    switch(action.type){
        case actions.LOGIN_REQUEST:
        return {
            ...state,
            isLoggingIn: true,
            loginError: false
        };
        case actions.LOGIN_SUCCESS:
        return {
            ...state,
            isLoggingIn: false,
            isAuthenticated: true,
            user: action.payload,
            authMsg: "Loggedin Successfully"
        };
        case actions.LOGIN_FAILURE:
        return {
            ...state,
            isLoggingIn: false,
            isAuthenticated: false,
            loginError: true
        };
        case actions.LOGOUT_REQUEST:
        return {
            ...state,
            isLoggingOut: true,
            logoutError: false
        };
        case actions.LOGOUT_SUCCESS:
        return {
            ...state,
            isLoggingOut: false,
            isAuthenticated: false,
            user: {}
        };
        case actions.LOGOUT_FAILURE:
        return {
            ...state,
            isLoggingOut: false,
            logoutError: true
        };
        case actions.VERIFY_REQUEST:
        return {
            ...state,
            isVerifying: true,
            verifyingError: false
        };
        case actions.VERIFY_SUCCESS:
        return {
            ...state,
            isVerifying: false
        };
        default:
        return state;
        };
}
