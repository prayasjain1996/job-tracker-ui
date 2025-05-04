import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";

// Get the root element where the app will be mounted
const rootElement = document.getElementById("root");

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
