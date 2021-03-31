import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store, { addPost, sendMessage, stateMessage, statePost, subscribe } from "./Redux/state";

export let renderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          store={store}
          // state={state}
          // addPost={addPost}
          // statePost={statePost}
          // sendMessage={sendMessage}
          // stateMessage={stateMessage}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

store.subscribe(renderEntireTree);
renderEntireTree(store);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
