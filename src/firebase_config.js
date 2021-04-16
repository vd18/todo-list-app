import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyC4Seua9IU4CgRTXEl0MrRLcgGdnKmkDgs",
    authDomain: "fir-todo-app-ec272.firebaseapp.com",
    projectId: "fir-todo-app-ec272",
    storageBucket: "fir-todo-app-ec272.appspot.com",
    messagingSenderId: "398428551093",
    appId: "1:398428551093:web:afeebc71295a0067374bfc"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };