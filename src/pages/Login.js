import React, {useState} from 'react'
import LoginComp from '../components/LoginComp';

const Login = () => {
    const [user, setUser] = useState('');

    return (
        <>
        <LoginComp />
            <h1>Login</h1>
        </>
    )
}

export default Login;
