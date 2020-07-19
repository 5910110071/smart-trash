import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAqXzo73MZ2ncMjdKtlMG9XrkEtdsnS9qg",
    authDomain: "smart-trash-75a8d.firebaseapp.com",
    databaseURL: "https://smart-trash-75a8d.firebaseio.com",
    projectId: "smart-trash-75a8d",
    storageBucket: "smart-trash-75a8d.appspot.com",
    messagingSenderId: "638241734313",
    appId: "1:638241734313:web:14e4cf708414f7622373b8",
    measurementId: "G-10S4D1SD6M"
  };

firebase.initializeApp(firebaseConfig);

export const authen = firebase
export default firebaseConfig
