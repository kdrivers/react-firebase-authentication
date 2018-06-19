import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDg_p1OvPlmqui9Hf3tq4UBNGahT-bzoTM",
    authDomain: "react-firebase-authentic-ba27a.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-ba27a.firebaseio.com",
    projectId: "react-firebase-authentic-ba27a",
    storageBucket: "react-firebase-authentic-ba27a.appspot.com",
    messagingSenderId: "666088502582"
  };
  
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};