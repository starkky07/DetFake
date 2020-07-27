import React , { Component }from 'react';
import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
require('dotenv').config()

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
    appId: process.env.REACT_APP_APP_ID ,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();

// export const signInWithGoogle = () => {
//     auth.signInWithPopup(provider);
// };