import React from "react";
import ReactDOM from "react-dom";
// import './index.css'
import App from "./App";
// import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./Components/counter";
import Counters from "./Components/counters";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
