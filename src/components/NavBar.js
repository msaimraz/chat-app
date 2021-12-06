import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { auth } from '../firebase/firebase';
// import useStyles from './Styles';
const pages = ['Home', 'About Us', 'Login', 'Sign Up'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = (user) => {
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
    const navi = useNavigate();

    const logOut = () => {
        auth.signOut(navi("/"))

    }
    return (
        <CssBaseline>
            <AppBar root position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            Chat-App
                        </Typography>


                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        {
                            user ?
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
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >   
                                    {/* Account menu */} 
                                    <MenuItem >
                                            <Link to='/Setting'  >Settings</Link>
                                        </MenuItem>
                                        <MenuItem onClick={logOut} disableRipple>Logout
                                        {/* <Link ></Link> */}
                                        </MenuItem>

                                        {/* {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))} */}
                                    </Menu>
                                </Box>
                                :
                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                            display: { xs: 'block', md: 'none' },
                                        }}
                                    >
                                        {pages.map((page) => (
                                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center">{page}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                        }

                    </Toolbar>
                </Container>
            </AppBar>
        </CssBaseline>
    );
};
export default NavBar;