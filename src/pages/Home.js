import React from "react";
import { Link  } from 'react-router-dom';
import { Button, CssBaseline } from "@mui/material";
// import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <CssBaseline> 
            {/* <NavBar /> */}
            <h1>Home</h1>
            <Link to='/Login' ><Button variant="outlined">Login</Button></Link>
            <Link to='/Signup' ><Button variant="outlined">Sign Up</Button></Link>

        </CssBaseline>
    );
};

export default Home;
