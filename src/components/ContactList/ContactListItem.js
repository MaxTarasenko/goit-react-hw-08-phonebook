import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import icon from './phone-icon.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  avatar: {
    marginRight: 20,
    width: 30,
    height: 30,
  },
}));

const InteractiveList = ({ name, number, onClick }) => {
  const classes = useStyles();
  const contactName = `Name: ${name}`;
  const contactNumber = `Number: ${number}`;

  return (
    <>
      <Avatar src={icon} className={classes.avatar} />
      <ListItemText primary={contactName} secondary={contactNumber} />
      <IconButton edge="end" aria-label="delete" onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default InteractiveList;
