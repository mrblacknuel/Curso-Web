import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDT9c0vPbWQ5BaF7YU30BMKwtyr2ygAcPY",
  authDomain: "vue-auth-a9594.firebaseapp.com",
  databaseURL: "https://vue-auth-a9594.firebaseio.com",
  projectId: "vue-auth-a9594",
  storageBucket: "vue-auth-a9594.appspot.com",
  messagingSenderId: "9672398125",
  appId: "1:9672398125:web:6199b3197d76b8aa28efa4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
