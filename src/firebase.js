import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID,

  apiKey: "AIzaSyBwsNceZ-nPV3YhMOvWxq5d8-Qt20avEqc",
  authDomain: "fire-auth-6c38d.firebaseapp.com",
  databaseURL: "https://fire-auth-6c38d-default-rtdb.firebaseio.com/",
  projectId: "fire-auth-6c38d",
  storageBucket: "fire-auth-6c38d.appspot.com",
  messagingSenderId: "700037692606",
  appId: "1:700037692606:web:a254eea14d977f37bd72ef",
});

export const auth = app.auth();
export default app;
