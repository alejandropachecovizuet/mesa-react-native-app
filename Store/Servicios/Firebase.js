import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDTo13UiQWYTpVJa7vpnyz8dGxUW46c5-k",
    authDomain: "test-firebase-apv.firebaseapp.com",
    databaseURL: "https://test-firebase-apv.firebaseio.com",
    projectId: "test-firebase-apv",
    storageBucket: "test-firebase-apv.appspot.com",
    messagingSenderId: "434621563591"
  };
  firebase.initializeApp(config);

export const autenticacion = firebase.auth();
export const baseDeDatos = firebase.database();
