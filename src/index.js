import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let dialogs = [
  { id: 1, name: "Max" },
  { id: 2, name: "Anna" },
  { id: 3, name: "Helen" },
  { id: 4, name: "Neo" },
  { id: 5, name: "Morfeus" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hello, how are you?" },
  { id: 3, message: "I`m fine" },
  { id: 4, message: "I`m fine" },
  { id: 5, message: "I`m fine" },
];

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 23 },
  { id: 2, message: "It's my first post!", likesCount: 0 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
