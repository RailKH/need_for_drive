import React from "react";
import ReactDOM from "react-dom";
import AdminPanel from "./components/admin-panel/admin-panel";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route exact path="/need_for_drive" component={App} />
        <Route exact path="/admin" component={AdminPanel} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
