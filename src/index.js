import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
// console.log("store", store);
// console.log("prev-STATE", store.getState());

// store.dispatch({
//   type: "ADD_MOVIE",
//   movies: [{ name: "superman" }],
// });
// console.log("after-STATE", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
