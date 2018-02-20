import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/user/action';
import Loader from 'react-loader';
import LoginForm from '../../components/LoginForm/LoginForm';
import PropTypes from 'prop-types';

import { retrieveStoredUser } from '../../_helpers/localStorageHelper.js';
import './LoginPage.css';

export class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      storeUser: false,
    };
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.dispatch(login(this.state));
    this.setState({ email: '', password: '', storeUser: false });
  }

  onChange = (name, value) => {
    this.setState({ [name]: value });
  };

  componentDidMount() {
    let storedUser = retrieveStoredUser('userDetails');

    if (storedUser !== null) {
      this.setState({ email: storedUser.email, storeUser: true });
    }
  }

  render() {
    return (
      <section className="LoginPage">
        <Loader color="#010113" loaded={!this.props.requesting}>
          <LoginForm
            email={this.state.email}
            password={this.state.password}
            storeUser={this.state.storeUser}
            onSubmit={e => this.onSubmit(e)}
            onChange={this.onChange}
          />
        </Loader>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    dispatch: PropTypes.func.isRequired,
    requesting: state.user.requesting,
  };
}

export default connect(mapStateToProps)(LoginPage);
