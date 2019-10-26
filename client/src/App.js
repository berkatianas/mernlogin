import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Alert from "./components/Alert";
import PrivateRoute from "./components/PrivateRoute";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Alert />
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
