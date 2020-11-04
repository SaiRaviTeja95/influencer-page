/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from "../img/logo/galleri5_logo.png"
import ContactIcon from "../img/contact/contact us icon.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="navbar">
          <Typography variant="h6" className={classes.title}>
            <a className="brandLogo" href=""><img src={Logo} alt=""/></a>
          </Typography>
          <div>
            <a className="NavLinks" href="">ABOUT US</a>
            <a className="NavLinks" href="">OUR APPROACH</a>
            <a className="NavLinks" href="">CASE STUDIES</a>
          </div>
          
          <Button color="inherit">
            <img src={ContactIcon} alt=""/>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;