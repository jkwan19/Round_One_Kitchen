import React from 'react';
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import logo from '/Users/justinkwan/round-one-kitchen/public/images/logo_red.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  header: {
    backgroundColor: '#e7c912',
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
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6" noWrap>
            <img className={classes.logo} src={logo} alt="Round One Kitchen"/>
          </Typography>
          <div className={classes.tabHeader}>
            <Button component={Link} to="/">Home</Button>
            <Button component={Link} to="/blog">Blog</Button>
            <Button component={Link} to="/about">About Us</Button>
            <Button>
              <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <p>Profile</p>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
