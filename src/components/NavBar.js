import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, makeStyles, styled } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Stack } from '@mui/material';

import firebase from "firebase/app";
import "firebase/auth";
const NavBar = (props) => {
    const classes = useStyles();
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navi = useNavigate();


    const handleClose = () => {
        firebase.auth().signOut().then(() => {
            navi("/")
            // Sign-out successful.
        }).catch((error) => {
            navi("/home")
        });
    }
    const profileSetting = () => {

    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.menubackgroud}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Chat App
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                // onClose={handleClose}
                            > 
                            <MenuItem onClick={profileSetting}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                    )}
            </Toolbar>
        </AppBar>
        </div >
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menubackgroud: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    title: {
        flexGrow: 1
    }
}));
export default NavBar
