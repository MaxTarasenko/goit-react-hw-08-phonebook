import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

const styles = {
  activeLink: {
    color: '#fff',
    borderBottom: '1px solid',
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav className="nav_buttons">
    <NavLink to="/" exact className="nav_link" activeStyle={styles.activeLink}>
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className="nav_link"
        activeStyle={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
