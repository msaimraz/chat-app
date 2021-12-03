import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, makeStyles} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import "./Components.css"
const NavBar = () => {
    
    return (
        <div className="root">
            <AppBar position="static" className="menubackgroud">
                <Toolbar>
                    <Typography variant="h6" className="title">

                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
