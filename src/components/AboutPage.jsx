import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    toolbar: theme.mixins.toolbar,
    alignText: 'center',
  }
}));

function AboutPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>About Us</div>
  )
};

export default AboutPage;