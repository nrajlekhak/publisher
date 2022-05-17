import React from "react";
import Navigation from "./navigation";
import "./index.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './redux/store';



const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
ReactDOM.render(<App />, document.getElementById("app"));
