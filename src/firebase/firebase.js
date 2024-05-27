// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN5-D9N2imXIit_c4UuGGvMfJlczX42uI",
  authDomain: "garganoconnect.firebaseapp.com",
  projectId: "garganoconnect",
  storageBucket: "garganoconnect.appspot.com",
  messagingSenderId: process.env.MESSAGE_SENDER,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
