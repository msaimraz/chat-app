import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, MenuItem, Avatar } from '@mui/material';
import './style.css'
const NavBar1 = () => {

    return (
        <AppBar position="static" className='navBar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        sx={{ flexGrow: 1, mr: 2, display: { xs: 'flex', md: 'flex' } }}
                    >
                        Chat App
                    </Typography>
                    <MenuItem root focusVisible >
                        <Link to="/Login" className="Link">SignIn</Link>
                    </MenuItem>
                    <MenuItem root focusVisible >
                        <Link to='/Signup' className="Link">SignUp</Link>
                    </MenuItem>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar1
