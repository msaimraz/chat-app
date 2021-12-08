import React from 'react';
import Account from '../components/Account';
import NavBar from '../components/NavBar';
import {CssBaseline, Typography } from "@mui/material";

const Settings = () => {
    return (
        <CssBaseline>
            <NavBar />
            <Typography variant='h3' component="div" gutterBottom align='center'>Settings</Typography>
            <Account />
        </CssBaseline>
    )
}

export default Settings;
