import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ContactFilter, ContactForm, ContactList } from '../components';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import CircularProgress from '@material-ui/core/CircularProgress';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="phonebook-box">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactFilter />
        {isLoading ? <CircularProgress /> : <ContactList />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
