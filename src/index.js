import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/redux-store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App
        // store={store}
        // state={state}
        // dispatch={store.dispatch.bind(store)}
        // state={state}
        // statePost={statePost}
        // sendMessage={sendMessage}
        // stateMessage={stateMessage}
        />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
