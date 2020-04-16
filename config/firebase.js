import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBKzPqmh1ZpOGpi9WZKK2j3bwZu990KdQU",
    authDomain: "maamuu-78a10.firebaseapp.com",
    databaseURL: "https://maamuu-78a10.firebaseio.com",
    projectId: "maamuu-78a10",
    storageBucket: "maamuu-78a10.appspot.com",
    messagingSenderId: "221543229523",
    appId: "1:221543229523:web:8fa5d02a29ba6263ab7ea6",
    measurementId: "G-BQ06XGTLLF"
  };
firebase.initializeApp(config);

export default firebase;