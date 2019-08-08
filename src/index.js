import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
// import 'firebase/functions';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import * as serviceWorker from "./serviceWorker";

const firebaseConfig = {
  apiKey: "AIzaSyCNC0E2sAV3FO2A7ir1lW8WuZoCqbYyGlA",
  authDomain: "simple-crud-2468c.firebaseapp.com",
  databaseURL: "https://simple-crud-2468c.firebaseio.com",
  projectId: "simple-crud-2468c",
  storageBucket: "",
  messagingSenderId: "1094165526313",
  appId: "1:1094165526313:web:fe5164e48c141d24"
};

const rrfConfig = {};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.functions();
const store = createStore(rootReducer, applyMiddleware(thunk));

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
