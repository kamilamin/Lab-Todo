import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase';


 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA2Jux-lOyOo0ROYFsWwGydFjh-x5ax7B0",
    authDomain: "the-fancy-table.firebaseapp.com",
    databaseURL: "https://the-fancy-table.firebaseio.com",
    storageBucket: "the-fancy-table.appspot.com",
    messagingSenderId: "413224015178"
  };

  firebase.initializeApp(config);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
