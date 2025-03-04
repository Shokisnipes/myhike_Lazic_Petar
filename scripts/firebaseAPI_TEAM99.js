//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBtlVR_nHm24ZdY2sErgA0y93rGnIx1ZwM",
    authDomain: "comp-1800-202510.firebaseapp.com",
    projectId: "comp-1800-202510",
    storageBucket: "comp-1800-202510.firebasestorage.app",
    messagingSenderId: "474146507854",
    appId: "1:474146507854:web:2e3253465ed8e19a38071f"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

