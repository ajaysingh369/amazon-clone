import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzKIQEXXfSDCjkMffDR6LUzDtzuMZgAVI",
    authDomain: "clone-7698a.firebaseapp.com",
    projectId: "clone-7698a",
    storageBucket: "clone-7698a.appspot.com",
    messagingSenderId: "827457218018",
    appId: "1:827457218018:web:e5ef83204d9c22af7ec5bb",
    measurementId: "G-J3CJTG4B0V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };