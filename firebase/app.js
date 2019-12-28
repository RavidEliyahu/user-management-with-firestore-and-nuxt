import firebase from 'firebase/app'

// My web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBUnN6SzDan1EXpqsSEwVuGbwqJncMTv-o",
  authDomain: "pokemon-dev-001.firebaseapp.com",
  databaseURL: "https://pokemon-dev-001.firebaseio.com",
  projectId: "pokemon-dev-001",
  storageBucket: "pokemon-dev-001.appspot.com",
  messagingSenderId: "740569194099",
  appId: "1:740569194099:web:19a5980034909fa5a69406",
  measurementId: "G-EQGTH1CJDX"
}

// Initialize Firebase
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()