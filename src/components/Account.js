import { CssBaseline, Typography, TextField, Button } from '@mui/material';
import React, { useState, useEffect } from "react";
import {auth, db } from '../firebase/firebase';

const Account = () => {

const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(user =>{
            if(user) setUser(user)
            else setUser(null)
        })
    }, [])

    const [text, setText] = useState('');

    const handleBio =(event) => {
        setText(event.target.value);
    }
    const addBio =()=>{
        db.collection('bio').doc(user.uid).set({

        })
    }
    return (
        <CssBaseline>
            <Typography variant='h6' component="div" gutterBottom align='center'>Bio</Typography>
            <TextField
                id="standard-basic"
                className='bio'
                label="Bio"
                variant="standard"
                onChange={handleBio}
                type="text"
                value={text}
                autoComplete="off" />
            <Button variant="outlined" onClick={()=>{addBio()}}>Save</Button>
        </CssBaseline>
    )
}

export default Account;
