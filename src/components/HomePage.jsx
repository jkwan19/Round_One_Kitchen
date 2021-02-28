import React from 'react';
import faker from 'faker';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    toolbar: theme.mixins.toolbar,
  },
  text: {
    fontSize: '18px',
    alignText: 'center'
  }
}));

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Welcome to Round One Kitchen
      <p className={classes.text}>{faker.lorem.paragraphs()}</p>
      <p className={classes.text}>{faker.lorem.paragraphs()}</p>
      <p className={classes.text}>{faker.lorem.paragraphs()}</p>
    </div>
  )
};

export default HomePage;