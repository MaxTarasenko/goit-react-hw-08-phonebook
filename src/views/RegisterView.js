import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignUp } from '../components';
import { authOperations } from '../redux/auth';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <SignUp
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          name={name}
          email={email}
          password={password}
        />
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
