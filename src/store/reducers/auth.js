
import * as actions from '../actions/actionTypes'

const initialState = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    isSigningUp: false,
    isSignedUp: true,
    signUpError: true,
    user: {},
    authMsg: ""
}

export default (state=initialState, action) => {
    switch(action.type){
        case actions.LOGIN_REQUEST:
        return {
            ...state,
            isLoggingIn: true,
            loginError: false,
            authMsg: "Behold, You're abou to explore the truth!!!"
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
            loginError: true,
            authMsg: "Please check your credentials"
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
            user: {},
            authMsg: "Logged out sucessfully"
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
        
        case actions.SIGNUP_REQUEST:
        return {
            ...state,
            isSigningUp: true,
            authMsg: action.payload
        }
        case actions.SIGNUP_SUCCESS:
        return {
            ...state,
            isSigningUp: true,
            isAuthenticated: true,
            user: action.payload,
            authMsg: "Your account was successfully created!"
        }
        case actions.SIGNUP_ERROR:
        return {
            ...state,
            signupError: true,
            authMsg: action.payload
        }
        default:
        return state;
        };
}
