import React from "react";
import ReactDOM from "react-dom/client";
// import {FirstApp} from "./FirstApp";
import {CounterApp} from './CounterApp'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterApp value={0}/>
    {/* <FirstApp titre='Bonjour, je suis Robert'/> */}
  </React.StrictMode>
);
