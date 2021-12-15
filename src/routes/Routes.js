import { Routes as AppRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import React, {useState, useEffect} from "react";
import { auth } from "../firebase/firebase";


const Routes = (dataStore) => {

    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(user =>{
            if(user) setUser(user);
            else setUser(null);
        });
    }, [])


    return (
        <AppRoutes>
            <Route path="*" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home/" element={<Dashboard user={user}/>} />
            <Route path="/setting" element={<Settings/>} />
        </AppRoutes>
    )   
};

export default Routes;
