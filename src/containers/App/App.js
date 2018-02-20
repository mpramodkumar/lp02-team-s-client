import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router';
import LoginPage from '../LoginPage/LoginPage';
import Messages from '../Message/Messages';
import PropTypes from 'prop-types';

import './App.css';
import 'material-design-icons/iconfont/material-icons.css';

export class App extends Component {
  isAuthorized = () => {
    const { isAuthenticated } = this.props;
    return isAuthenticated;
  };

  authorize = (component, altComponent) => {
    return this.isAuthorized() ? component : altComponent;
  };

  render() {
    return (
      <div className="App">
        <Messages />
        <Switch>
          <Route
            exact
            path="/"
            component={this.authorize(null, LoginPage)}
          />
         </Switch>
      </div>
    );
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated,
  };
}

export default withRouter(connect(mapStateToProps)(App));
