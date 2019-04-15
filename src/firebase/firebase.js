import * as firebase from "firebase";
// import firestore from 'firebase/firestore';

var config = {
  apiKey: "AIzaSyABPTSOIehOWXrIrTlZLsAfjcou_f3oy1s",
  authDomain: "blog-template-e8082.firebaseapp.com",
  databaseURL: "https://blog-template-e8082.firebaseio.com",
  projectId: "blog-template-e8082",
  storageBucket: "blog-template-e8082.appspot.com",
  messagingSenderId: "589851773038"
};

firebase.initializeApp(config);

export default firebase;
