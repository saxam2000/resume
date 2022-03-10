import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore ,applyMiddleware } from "redux";
import {BrowserRouter} from "react-router-dom";
import { ReactReduxFirebaseProvider, getFirebase,reactReduxFirebase } from "react-redux-firebase";
import { ReduxFirestore, getFirestore, createFirestoreInstance} from "redux-firestore";
import firebase from 'firebase/app';
import firebaseConfig from "./secrets/secret";
import store from './Store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root') 
);
