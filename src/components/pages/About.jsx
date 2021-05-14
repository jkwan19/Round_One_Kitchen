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
  },
  header: {
    paddingTop: theme.spacing(2)
  },
  text: {
    fontSize: '18px',
    alignText: 'center'
  }
}));

function AboutPage() {
  const classes = useStyles();
  return (
    <Grid container
    className={classes.root}
    >
    <Typography
      variant="h5"
      className={classes.header}>
        About Us
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

export default AboutPage;