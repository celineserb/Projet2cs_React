import React, { Component } from 'react';
import { BrowserRouter, Route, Switch ,Link } from 'react-router-dom';
import './scss/style.scss';
// import { Link } from 'react-router-dom';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const isAuthenticated = () => {
  //write your condition here
  return false;
}


const UnauthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !isAuthenticated()
      ? <Component {...props} />
      : <Link to="/login">Back to home page</Link>
  )} />
);


// const AuthenticatedRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     isAuthenticated()
//       ? <Component {...props} />
//       : <Redirect to='/login' />
//   )} />
// );


class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
            {/* <UnauthenticatedRoute exact path="/login" name="Login Page" component={Login} /> */}
              <Route exact path="/" name="Login Page"  render={props => <Login {...props}/>} />
              <Route exact  path="/register"   name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404"  name="Page 404"  render={props => <Page404 {...props}/>} />
              <Route exact  path="/500"  name="Page 500"   render={props => <Page500 {...props}/>} />
              <Route  path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
