import firebase from "firebase/app";
import firestore from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCi704PrirOxZVRFvI9qh2sdqdUvtlUv3I",
  authDomain: "vue-crud-c590f.firebaseapp.com",
  databaseURL: "https://vue-crud-c590f.firebaseio.com",
  projectId: "vue-crud-c590f",
  storageBucket: "vue-crud-c590f.appspot.com",
  messagingSenderId: "327849282508",
  appId: "1:327849282508:web:cc59e8a626bc84d0d3ab69",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
