import React from 'react';
import Account from '../components/Account';
import { Button, CssBaseline, Typography } from "@mui/material";

const Settings = () => {
    return (
        <CssBaseline>
            <Typography variant='h1' component="div" gutterBottom align='center'>Settings</Typography>

            <Account />

        </CssBaseline>
    )
}

export default Settings;
