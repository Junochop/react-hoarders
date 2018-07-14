import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Login from '../components/Login/Login.js';
import firebase from 'firebase';
import Navbar from '../components/Navbar/Navbar.js';
import AllTheStuff from '../components/AllTheStuff/AllTheStuff.js';
import Register from '../components/Register/Register.js';
import Garage from '../components/Garage/Garage.js';
// import SingleItem from '../components/SingleItem/SingleItem.js';
import fbConnection from '../firebaseRequests/connection';
// import New from '../components/New/New.js';

fbConnection ();

// import './App.css';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/AllTheStuff', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount () {
    this.removeListner = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });

      }
    });
  }

  componentWillUnmount () {
    this.removeListner();
  }

  runAway = () => {
    this.setState({ authed: false });
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              authed={this.state.authed}
              runAway={this.runAway}
            />
            <div className="container">
              <div className="row">
                <Switch>
                  <PrivateRoute
                    path="/AllTheStuff"
                    authed={this.state.authed}
                    component={AllTheStuff}
                  />
                  <PublicRoute
                    path="/register"
                    authed={this.state.authed}
                    component={Register}
                  />
                  <PublicRoute
                    path="/login"
                    authed={this.state.authed}
                    component={Login}
                  />
                  <PrivateRoute
                    path="/garage"
                    authed={this.state.authed}
                    component={Garage}
                  />
                  {/* <PrivateRoute
                    path="/new"
                    authed={this.state.authed}
                    component={New}
                  /> */}
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
