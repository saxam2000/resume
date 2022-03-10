// import {config} from "./secret"
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
let config={
   apiKey: "AIzaSyDM5RHZ_lmImbHXjoxhV7nsqVcayUrbBuc",
   authDomain: "resumebuilder-de8d4.firebaseapp.com",
   projectId: "resumebuilder-de8d4",
   storageBucket: "resumebuilder-de8d4.appspot.com",
   messagingSenderId: "558417937148",
   appId: "1:558417937148:web:c88fb0c9705fdf4dd28d79",
   measurementId: "G-NSFEW7MCV4"
  }
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 }
// firebase.initializeApp(config);
var db=firebase.firestore();
// firebase.firestore().settings({timestampsInSnapshots:true});
export default firebase;