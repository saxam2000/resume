import RootReducer from "./Reducers/RootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import fbconfig from "../src/secrets/fbconfig";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./secrets/secret";
import thunk from "redux-thunk";
import {
  ReactReduxFirebaseProvider,
  reactReduxFirebase,
  useFirebase,
  getFirebase,
} from "react-redux-firebase";
import {
  getFirestore,
  createFirestoreInstance,
  reduxFirestore,
} from "redux-firestore";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { composeWithDevTools } from "redux-devtools-extension";
// firebase.firestore();
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
// firebase.firestore();
let store = createStore(
  RootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase)
  )
);
export default store;
