import React from "react";
import ReactDOM from "react-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import createLoadingPlugin from '@rematch/loading';

import sharks from "./models/sharks";
import dolphins from "./models/dolphins";
import my from "./models/my";
import App from "./App";

const loadingPlugin = createLoadingPlugin();

// generate Redux store
const store = init({
  plugins: [loadingPlugin],
  models: {
    sharks,
    dolphins,
    my
  },
});

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));