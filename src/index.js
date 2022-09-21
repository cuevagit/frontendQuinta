import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { initializeApp } from "firebase/app";

import App from './App';
import reportWebVitals from './reportWebVitals';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDo9GYD-jHwv3lnSIwx9J6SdLOByuCcbI4",
  authDomain: "react-project-faa6e.firebaseapp.com",
  projectId: "react-project-faa6e",
  storageBucket: "react-project-faa6e.appspot.com",
  messagingSenderId: "587094204213",
  appId: "1:587094204213:web:48fa6548e3aa3c78a9b67c"
};


// Initialize Firebase

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
