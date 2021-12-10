import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Profile from '../components/Profile';
import NavBar from '../components/NavBar';
import { CssBaseline } from "@mui/material";
const Settings = () => {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <CssBaseline>
            <NavBar />
            <Tabs value={value} onChange={handleChange}  >
                <Tab icon={<AccountCircleIcon />} active label="Profile" />
                <Tab icon={<FavoriteIcon />} disabled label="FAVORITES" />
                <Tab icon={<PersonPinIcon />} disabled label="NEARBY" />
            </Tabs>
            <Profile />
        </CssBaseline>
    );
}

export default Settings;
