import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignIn } from '../components';
import { authOperations } from '../redux/auth';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <SignIn
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          email={email}
          password={password}
        />
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
