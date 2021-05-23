import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./assets/scss/style.scss";

import Login from "./app/conponents/pages/login/Login";
import TheLayout from "./app/containers/TheLayout";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      localStorage.getItem("token") ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location },
          }}
        />
      )
    }
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <PrivateRoute path="/dashboard">
              <TheLayout />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
