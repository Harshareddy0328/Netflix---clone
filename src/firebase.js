import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6J2kc2HQtTkkIjRDTsHHchuYrT5j99B4",
  authDomain: "netflix-build-38c50.firebaseapp.com",
  projectId: "netflix-build-38c50",
  storageBucket: "netflix-build-38c50.appspot.com",
  messagingSenderId: "138539656753",
  appId: "1:138539656753:web:049535ed6ac13117cd1710"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}

export default db;