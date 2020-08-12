import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  activeLink: {
    color: '#fff',
    borderBottom: '1px solid',
  },
};

const AuthNav = () => (
  <div className="nav_buttons">
    <NavLink
      to="/register"
      exact
      className="nav_link"
      activeStyle={styles.activeLink}
    >
      Sign up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className="nav_link"
      activeStyle={styles.activeLink}
    >
      Sign in
    </NavLink>
  </div>
);

export default AuthNav;
