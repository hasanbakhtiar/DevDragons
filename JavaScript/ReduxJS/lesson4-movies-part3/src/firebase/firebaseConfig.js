import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCSEzGM7IvdePUvpEnjYfR7-40Ys6KFZDg",
    authDomain: "devdragons-106d6.firebaseapp.com",
    databaseURL: "https://devdragons-106d6-default-rtdb.firebaseio.com",
    projectId: "devdragons-106d6",
    storageBucket: "devdragons-106d6.appspot.com",
    messagingSenderId: "1058784786620",
    appId: "1:1058784786620:web:7c15a04196f8e7d3f878b9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }