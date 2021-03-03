import React from 'react';
import faker from 'faker';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    toolbar: theme.mixins.toolbar,
    alignText: 'center',
    align: 'center'
  },
  text: {
    fontSize: '18px'
  }
}));

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3 className={classes.header}>Welcome to Round One Kitchen</h3>
      <p className={classes.text}>{faker.lorem.paragraphs()}</p>
      <p className={classes.text}>{faker.lorem.paragraphs()}</p>
      <p className={classes.text}>{faker.lorem.paragraphs()}</p>
    </div>
  )
};

export default HomePage;