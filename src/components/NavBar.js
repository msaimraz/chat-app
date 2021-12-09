import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Tooltip, MenuItem, CssBaseline } from '@mui/material';
import { auth } from '../firebase/firebase';
// const pages = ['Home', 'About Us', 'Login', 'Sign Up'];

const NavBar = () => {

    const navi = useNavigate();

    const logo = () => {
        navi("/home");
    }
    const settings = [
        {
            name: 'Home', func: () => {
                navi("/home");
            }
        },
        {
            name: 'Profile', func: () => {
                navi("/setting");
            }
        },

        { name: 'Account' },

        {
            name: 'Logout', func: () => {
                auth.signOut().then(() => {
                    // Sign-out successful.
                    console.log("user is  logout");
                    navi("/");
                }).catch((error) => {
                    // An error happened.
                    console.log("user is not logout");
                });
                // auth.signOut(navi("/"));

            }
        }
    ];
    // const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <CssBaseline>
            <AppBar root position="static" className='navBar'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            onClick={logo}
                            sx={{ flexGrow: 1, mr: 2, display: { xs: 'flex', md: 'flex' } }}
                        >
                            Chat-App
                        </Typography>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting.name} onClick={handleCloseNavMenu, setting.func}>
                                        <Typography textAlign="center">{setting.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>


                    </Toolbar>
                </Container>
            </AppBar>
        </CssBaseline>
    );
};
export default NavBar;