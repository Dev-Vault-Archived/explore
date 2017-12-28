import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBL0jcYc5AX052whS855k5bzRkTu8DrNKg",
    authDomain: "portfolio-b3dc2.firebaseapp.com",
    databaseURL: "https://portfolio-b3dc2.firebaseio.com",
    projectId: "portfolio-b3dc2",
    storageBucket: "portfolio-b3dc2.appspot.com",
    messagingSenderId: "670847010738"
};

firebase.initializeApp(config);

export default {
  database: firebase.database(),
};
