import { Routes as AppRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


const Routes = () => {
    return (
        <AppRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Dashboard />} />
        </AppRoutes>
    );
};

export default Routes;
