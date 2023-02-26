// Import the functions you need from the SDKs you need
//import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7dT5kHqjJzeuCTZoD3s7kTKvY7jofYek",
    authDomain: "crwn-db-b47d8.firebaseapp.com",
    projectId: "crwn-db-b47d8",
    storageBucket: "crwn-db-b47d8.appspot.com",
    messagingSenderId: "819334835845",
    appId: "1:819334835845:web:e2d27778c3f0d749e6c3ec",
    measurementId: "G-V0FDJD5K8B"
  };

//const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, addtionalData) => {
    
    
    if(!userAuth) return;
    
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();
    
  
  
if(!snapShot.exists){
       const { displayName, email } = userAuth;
       const createAt = new Date();

       try{
         await userRef.set({
          displayName,
          email,
          createAt,
          ...addtionalData
         })

       }catch(error){
          console.log('error creating user', error.message);
       }

       
      }
     
      return userRef;
  };


//const db = getFirestore(app);






export default firebase;