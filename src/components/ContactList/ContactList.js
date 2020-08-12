import { ListItem } from '@material-ui/core';
import List from '@material-ui/core/List';
import PropTypes, { exact } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <ContactListItem
          name={name}
          number={number}
          onClick={() => onDelete(id)}
        />
      </ListItem>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchtoProps = dispatch => ({
  onDelete: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ContactList);
