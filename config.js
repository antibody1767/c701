import * as firebase from "firebase"
require("@firebase/firestore")


var firebaseConfig = {
    apiKey: "AIzaSyDIPRHUrQmyFsiTS2b0PXqWVEUvrc-EWHY",
    authDomain: "willy-be3c1.firebaseapp.com",
    projectId: "willy-be3c1",
    storageBucket: "willy-be3c1.appspot.com",
    messagingSenderId: "773097162907",
    appId: "1:773097162907:web:a02c216c099c3cf95cde3e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()