import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxzNJ6UvBGCMIOLgZy7sapgXpor_El39Q",
  authDomain: "ecommerce-react-32d31.firebaseapp.com",
  projectId: "ecommerce-react-32d31",
  storageBucket: "ecommerce-react-32d31.appspot.com",
  messagingSenderId: "528901878560",
  appId: "1:528901878560:web:08bfa71d742a150eb89d45",
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
