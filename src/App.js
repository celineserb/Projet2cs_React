import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./assets/scss/style.scss";

import Login from "./app/pages/AuthPages/login/Login";
import TheLayout from "./app/containers/TheLayout";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {

  const authToken = useSelector(({authState}) => authState.authToken)
  
  return (<Route
    {...rest}
    render={({ location }) =>
      authToken ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      )
    }
  />
  );
}


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <PrivateRoute path="/">
              <TheLayout />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
