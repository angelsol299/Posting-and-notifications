import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyACbml5SG2Gb0YRb4W5PGunqmPM9c7FEHE",
  authDomain: "recipe-beabf.firebaseapp.com",
  databaseURL: "https://recipe-beabf.firebaseio.com",
  projectId: "recipe-beabf",
  storageBucket: "recipe-beabf.appspot.com",
  messagingSenderId: "771709045613"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
