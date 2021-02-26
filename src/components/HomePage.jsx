import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    toolbar: theme.mixins.toolbar,
    alignText: 'center',
  }
}));

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>Welcome to Round One Kitchen</div>
  )
};

export default HomePage;