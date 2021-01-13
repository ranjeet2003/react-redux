import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducer/reducer";

const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
