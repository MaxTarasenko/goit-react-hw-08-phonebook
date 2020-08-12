// Material
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperation from '../../redux/contacts/contacts-operations';
import style from './contactForm.module.css';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e =>
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const classes = this.props;

    return (
      <form
        className={style.form}
        noValidate
        autoComplete="off"
        onSubmit={this.onSubmit}
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          label="Name"
          autoFocus
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          fullWidth
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          label="Number"
          type="text"
          name="number"
          value={number}
          onChange={this.handleChange}
          fullWidth
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Add contact
        </Button>
      </form>
    );
  }
}

const mapStateToProps = () => ({
  classes: useStyles,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(contactsOperation.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
