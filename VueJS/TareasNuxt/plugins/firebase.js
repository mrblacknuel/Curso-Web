import firebase from "firebase/app";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC-njnqJIsaBL3rnRQbQyayM0FQfPwM0CU",
  authDomain: "tareasnuxt-a8b8b.firebaseapp.com",
  databaseURL: "https://tareasnuxt-a8b8b.firebaseio.com",
  projectId: "tareasnuxt-a8b8b",
  storageBucket: "tareasnuxt-a8b8b.appspot.com",
  messagingSenderId: "598217235422",
  appId: "1:598217235422:web:baa55d58fdda33b1cb9b4f"
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };
