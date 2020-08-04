  import firebase from 'firebase/app'
  import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA2Qc8zd-d5m2gzOyaCGL3HQJLSobvC6aE",
    authDomain: "fir-react-crud-5a418.firebaseapp.com",
    databaseURL: "https://fir-react-crud-5a418.firebaseio.com",
    projectId: "fir-react-crud-5a418",
    storageBucket: "fir-react-crud-5a418.appspot.com",
    messagingSenderId: "51960438223",
    appId: "1:51960438223:web:a9d91b2aaac6438a7a46ba"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();