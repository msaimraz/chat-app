import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Tooltip, MenuItem, CssBaseline } from '@mui/material';
import { auth, db } from '../firebase/firebase';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { queries } from '@testing-library/dom';
// const pages = ['Home', 'About Us', 'Login', 'Sign Up'];


const NavBar = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
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
            name: 'Settings', func: () => {
                navi("/setting");
            }
        },

        // { name: 'Account' },

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
                auth.signOut(navi("/"));

            }
        }
    ];
    const [search, setSearch] = useState('');
    const searchUser = () => {
        db.collection("Profile").get().then((querySnapshot) => {
            let name = querySnapshot.docs.map(doc => doc.data().Name)
            console.log(name);
            {
                name.map((post) => (
                  <div key={post.name}>
                    <p>{post.name}</p>
                  </div>
                ));
              }
        })
        
    }
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
                        <Search >
                            <SearchIconWrapper sx={{ cursor: 'pointer' }}>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                onClick={searchUser}
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={event => setSearch(event.target.value)}
                            />
                            
                        </Search>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar
                                        src={URL}
                                    />
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