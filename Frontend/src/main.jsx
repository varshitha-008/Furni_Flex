import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

//redux related code
import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
