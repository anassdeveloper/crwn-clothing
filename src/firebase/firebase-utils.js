// Import the functions you need from the SDKs you need
//import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
/*
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
*/
const firebaseConfig = {
  apiKey: "AIzaSyC7dT5kHqjJzeuCTZoD3s7kTKvY7jofYek",
  authDomain: "crwn-db-b47d8.firebaseapp.com",
  projectId: "crwn-db-b47d8",
  storageBucket: "crwn-db-b47d8.appspot.com",
  messagingSenderId: "819334835845",
  appId: "1:819334835845:web:e2d27778c3f0d749e6c3ec",
  measurementId: "G-V0FDJD5K8B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;