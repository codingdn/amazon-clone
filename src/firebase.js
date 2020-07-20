import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD4ArjcmpbVHvwV4ZFIDoHb6rfF56gc6HE",
  authDomain: "clone-297b1.firebaseapp.com",
  databaseURL: "https://clone-297b1.firebaseio.com",
  projectId: "clone-297b1",
  storageBucket: "clone-297b1.appspot.com",
  messagingSenderId: "78720303589",
  appId: "1:78720303589:web:3054fd4a3404c50a416f0c",
  measurementId: "G-XJB8FYKL83",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };
