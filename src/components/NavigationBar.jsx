import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '/Users/justinkwan/round-one-kitchen/public/images/logo_red.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#e7c912',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  tabHeader: {
    margin: theme.spacing(1),
  },
  logo: {
    maxWidth: '120px',
    maxHeight: '120px'
  },
}));

function NavigationBar(props) {
  const classes = useStyles();

  const changeTabs = (e) => {
    props.handleTabPage(e.target.value);
  }

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
            <Button onClick={changeTabs} value="Home">Home</Button>
            <Button onClick={changeTabs} value="Blog">Blog</Button>
            <Button onClick={changeTabs} value="About">About Us</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
