import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1Cnej1aKutlXwNgxd0R6tZlHIKXrLqqM",
  authDomain: "cart-8f451.firebaseapp.com",
  projectId: "cart-8f451",
  storageBucket: "cart-8f451.appspot.com",
  messagingSenderId: "671584221323",
  appId: "1:671584221323:web:cab69e7526822f33c73c8e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
