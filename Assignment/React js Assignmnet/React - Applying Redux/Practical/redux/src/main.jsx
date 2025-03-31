import React from "react";
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

// ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,

// <RecoilRoot>
// <App />
// </RecoilRoot>,
//   document.getElementById("root")
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
// );
