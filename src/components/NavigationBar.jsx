import React from 'react';
import { Link } from 'react-router-dom'

import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'

import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import logo from '/Users/justinkwan/round-one-kitchen/public/images/logo_red.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  header: {
    backgroundColor: '#3CF5D2',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    justifyContent: 'center'
  },
  tabHeader: {
    margin: theme.spacing(1),
  },
  logo: {
    maxWidth: '120px',
    maxHeight: '120px',
    align: 'center'
  },
}));

function NavigationBar() {
  const classes = useStyles();

  return (
    <Grid container
      className={classes.root}
      spacing={2}
      >
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <Typography
              className={classes.title}
              variant="h6" noWrap>
              <img className={classes.logo} src={logo} alt="Round One Kitchen"/>
            </Typography>
          </Grid>
          <Grid item container xs={4}
            spacing={1}
            justify="flex-end"
            className={classes.tabHeader}>
            <Button component={Link} to="/">Home</Button>
            <Button component={Link} to="/recipes">Recipes  </Button>
            <Button component={Link} to="/about">About Us</Button>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              component={Link}
              to="/login"
            >
              <AccountCircle />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default NavigationBar;
