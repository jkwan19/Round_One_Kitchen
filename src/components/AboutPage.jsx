import React from 'react';
import faker from 'faker';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    toolbar: theme.mixins.toolbar,
    alignText: 'center',
  },
  text: {
    fontSize: '18px',
    alignText: 'center'
  }
}));

function AboutPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      About Us
      <p className={classes.text}>{faker.lorem.paragraphs()}</p>
      <p className={classes.text}>{faker.lorem.paragraphs()}</p>
      <p className={classes.text}>{faker.lorem.paragraphs()}</p>
    </div>
  )
};

export default AboutPage;