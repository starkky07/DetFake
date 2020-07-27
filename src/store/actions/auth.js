import { auth } from './../../firebase';
import * as actions from './actionTypes'



const requestLogin = () => {
  return {
    type: actions.LOGIN_REQUEST
  };
};

const receiveLogin = user => {
  return {
    type: actions.LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: actions.LOGIN_FAILURE
  };
};

const requestLogout = () => {
  return {
    type: actions.LOGOUT_REQUEST
  };
};

const receiveLogout = () => {
  return {
    type: actions.LOGOUT_SUCCESS
  };
};

const logoutError = () => {
  return {
    type: actions.LOGOUT_FAILURE,
    payload: "...some error message for the user..."
  };
};

const verifyRequest = () => {
  return {
    type: actions.VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: actions.VERIFY_SUCCESS
  };
};

export const signup = (email, password) => async dispatch => {
  try{
    auth
    .createUserWithEmailAndPassword(email, password)
    .then( (dataBeforeEmail) => {
      auth.onAuthStateChanged( (user) => {
        user.sendEmailVerification();
      })
    })
    .then( (dataAfterEmail) => {
      auth.onAuthStateChanged( (user) => {
        if(user.emailVerified){
          dispatch({
            type: actions.SIGNUP_SUCCESS,
            payload: "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."
          })
        } else {
          dispatch({
            type: actions.SIGNUP_ERROR,
            payload: "Something went wrong."
          })
        }
      })
    })
    .catch( (err) => {
      dispatch({
        type: actions.SIGNUP_ERROR,
        payload: "Something went wrong. Account Can't be created"
      })
    }) 
  } catch (err) {
    dispatch({
      type: actions.SIGNUP_ERROR,
      payload: "Something went wrong. Account Can't be created"
    })
  }
}

// export const signin = (email, password) => async dispatch => {
//   let history = useHistory();
//   try {
//     auth
//     .signInWithEmailAndPassword(email, password)
//     .then( () => {
//         dispatch({ type: actions.SIGNUP_SUCCESS});
//         history.push('/');
//     })
//     .catch( () => {
//       dispatch({
//         type: actions.SIGNIN_ERROR,
//         payload: "Invalid Login Credentials"
//       })
//     })
//   } catch (err) {
//       dispatch({
//         type: actions.SIGNIN_ERROR,
//         payload: "Invalid Login Credentials"
//       })
//   }
// }

export const resetPassword = email => async dispatch => {
  try {
    auth
    .sendPasswordResetEmail(email)
    .then(() => 
      dispatch({
        type: actions.RESET_SUCCESS,
        payload: "Reset email sent. Go check your inbox."
      })
    )
    .catch(err => {
      dispatch({
        type: actions.RESET_ERROR,
        payload: "...some message for the user..."
      });
    });
  } catch (err) {
    dispatch({ 
      type: actions.RESET_ERROR, 
      payload: "...some message for the user..." 
    });
  }
};
  
  
export const signin = (email, password) => async dispatch => {

    dispatch(requestLogin());
    auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log("User Details",user)
        dispatch({
          type: actions.LOGIN_SUCCESS,
          payload: user.user.email
        });
        // history.push("/");
      })
      .catch(error => {
        //Do something with the error if you want!
        dispatch(loginError());
      });
  };
  
  export const logout = () => dispatch => {
    dispatch(requestLogout());
    auth.signOut()
      .then(() => {
        dispatch(receiveLogout());
      })
      .catch(error => {
        //Do something with the error if you want!
        dispatch(logoutError());
      });
  };
  
export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    auth.onAuthStateChanged(user => {
        if (user !== null) {
          dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
      });
  };


