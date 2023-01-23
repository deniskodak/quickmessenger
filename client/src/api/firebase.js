import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_AUTH,
  authDomain: "quick-messenger-ca6ff.firebaseapp.com",
  projectId: "quick-messenger-ca6ff",
  storageBucket: "quick-messenger-ca6ff.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: "G-0BT63N87JG",
  databaseURL: 'https://quick-messenger-ca6ff-default-rtdb.europe-west1.firebasedatabase.app',
};

export const app = initializeApp(firebaseConfig);
export const getFirebaseAuth = () => getAuth(app)
export const database = getDatabase(app)