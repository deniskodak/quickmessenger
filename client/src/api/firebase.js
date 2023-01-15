import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

console.log(process.env.REACT_APP_FIREBASE_AUTH)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_AUTH,
  authDomain: "quick-messenger-ca6ff.firebaseapp.com",
  projectId: "quick-messenger-ca6ff",
  storageBucket: "quick-messenger-ca6ff.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: "G-0BT63N87JG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);