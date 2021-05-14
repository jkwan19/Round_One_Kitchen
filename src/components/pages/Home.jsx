import React from 'react';
import faker from 'faker';
import {
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    toolbar: theme.mixins.toolbar,
    alignText: 'center',
    align: 'center'
  },
  header: {
    paddingTop: theme.spacing(2)
  },
  text: {
    fontSize: '18px'
  }
}));

function HomePage() {
  const classes = useStyles();
  return (
    <Grid container
      className={classes.root}
      justify="center"
      >
      <Typography
        variant="h5"
        className={classes.header}>
          Welcome to Round One Kitchen
        </Typography>
      <Typography
        variant="body1"
        className={classes.text}>
          {faker.lorem.paragraphs()}
        </Typography>
        <Typography
        variant="body1"
        className={classes.text}>
          {faker.lorem.paragraphs()}
        </Typography>
        <Typography
        variant="body1"
        className={classes.text}>
          {faker.lorem.paragraphs()}
        </Typography>
    </Grid>
  )
};

export default HomePage;