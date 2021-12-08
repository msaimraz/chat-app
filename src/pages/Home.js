import React from "react";
import { Link  } from 'react-router-dom';
import { Button, CssBaseline } from "@mui/material";
import NavBar1 from "../components/NavBar1";

const Home = () => {

    return (
        <CssBaseline> 
            <NavBar1 />
            <h1>Home</h1>
            {/* <Link to='/Login' ><Button variant="outlined">Login</Button></Link>
            <Link to='/Signup' ><Button variant="outlined">Sign Up</Button></Link> */}

        </CssBaseline>
    );
};

export default Home;
