import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBClqWt3j3pn7Az4bL1jAYPASE7aWwuP54",
  authDomain: "auth-cf198.firebaseapp.com",
  projectId: "auth-cf198",
  storageBucket: "auth-cf198.appspot.com",
  messagingSenderId: "284218023448",
  appId: "1:284218023448:web:3c7dbb560af1cd3cee6d6d",
  measurementId: "G-8S1GYKHFW3"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
