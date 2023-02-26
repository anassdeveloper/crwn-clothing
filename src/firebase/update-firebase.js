import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}