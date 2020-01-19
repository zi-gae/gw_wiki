import React from "react";
import Timer from "./components/Timer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

let store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Timer></Timer>
    </Provider>
  );
}
