import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCihM02A7E6md86_QytotNHbHJ7JKjyM0o",
    authDomain: "chatapp-367e0.firebaseapp.com",
    projectId: "chatapp-367e0",
    storageBucket: "chatapp-367e0.appspot.com",
    messagingSenderId: "864484304588",
    appId: "1:864484304588:web:377dfeb624db9af6510469"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;