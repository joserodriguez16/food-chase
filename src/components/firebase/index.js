import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDt3XjGlLvxHiz16w2St0-PZ667bLPxSMo",
    authDomain: "reactpicturehandler.firebaseapp.com",
    databaseURL: "https://reactpicturehandler.firebaseio.com",
    projectId: "reactpicturehandler",
    storageBucket: "reactpicturehandler.appspot.com",
    messagingSenderId: "699385346078",
    appId: "1:699385346078:web:580b466bac5e6c88e2960f",
    measurementId: "G-TQ40PFK2W7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {
	storage, firebase as default
}