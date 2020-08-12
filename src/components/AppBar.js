import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import { AuthNav, Navigation, UserMenu } from './';

const AppBar = ({ isAuthenticated }) => (
  <header className="nav">
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
