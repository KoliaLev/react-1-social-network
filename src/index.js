import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import state from "./Redux/state";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, sendMessage, stateMessage, statePost, subscribe } from "./Redux/state";

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          statePost={statePost}
          sendMessage={sendMessage}
          stateMessage={stateMessage}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(state);
subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
