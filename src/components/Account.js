import { CssBaseline, Typography, TextField, Button, Card,  IconButton } from '@mui/material';
import React, { useState, useEffect } from "react";
import {PhotoCamera} from '@mui/icons-material/';
import { styled } from '@mui/material/styles';
import { auth, db } from '../firebase/firebase';
import './style.css'

const Account = () => {

    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) setUser(user)
            else setUser(null)
        })
    }, [])

    const Input = styled('input')({
        display: 'none',
    });
    const [photo, setPhoto] = useState('');

    const handlePhoto = (event) => {
        setPhoto(event.target.value);
    }
    const addPhoto = () => {
        console.log('Photo store');
        db.collection('Profile Photo').doc(user.uid.profilePhoto).set({
            profilePhoto: photo
        })
    }
    const [text, setText] = useState('');

    const handleBio = (event) => {
        setText(event.target.value);
    }
    const addBio = () => {
        console.log('data store');
        db.collection('Bio').doc(user.uid.bio).set({
            name: text
        })
    }
    return (
        <CssBaseline >
            <div className='accountRoot'>
                <Card sx={{ width: '100vh' }} className='accountMain'>
                    <Typography variant='h6' component="div" gutterBottom align='center'>Profile Photo</Typography>
                    <div className='accountDiv'>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>        
                        <Button variant="contained" onClick={() => { addPhoto() }} className='btn'>Done</Button>
                    </div>
                    {/* </Card>
            </div>
            <div className='accountRoot'> */}
                    {/* <Card sx={{ width: '100vh' }}className='accountMain'> */}
                    <Typography variant='h6' component="div" gutterBottom align='center'>About</Typography>
                    <div className='accountDiv'>
                        <TextField
                            id="standard-basic"
                            className='bio'
                            label="Bio"
                            variant="standard"
                            onChange={handleBio}
                            type="text"
                            value={text}
                            autoComplete="off" />
                        <Button variant="contained" onClick={() => { addBio() }} className='btn'>Save</Button>
                    </div>
                </Card>
            </div>
        </CssBaseline>
    )
}

export default Account;
