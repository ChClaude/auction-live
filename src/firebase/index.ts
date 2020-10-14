// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyBwIFK5Q5vWSFlZW08bYcT91r1yEQpuwXc",
  authDomain: "champion-auctioneers.firebaseapp.com",
  databaseURL: "https://champion-auctioneers.firebaseio.com",
  projectId: "champion-auctioneers",
  storageBucket: "champion-auctioneers.appspot.com",
  messagingSenderId: "294386395501",
  appId: "1:294386395501:web:7f18c890356b68cb171264",
  measurementId: "G-F44XCB62S7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
