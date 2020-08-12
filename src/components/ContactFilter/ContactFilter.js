import PropTypes from 'prop-types';
import React from 'react';
import style from './filter.module.css';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import TextField from '@material-ui/core/TextField';

const Filter = ({ value, onChange }) => (
  <div className={style.blockFilter}>
    <TextField
      label="Filter"
      placeholder="Find contacts by name"
      variant="outlined"
      fullWidth
      margin="normal"
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
