import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import { Card, Button, Box, TextField, IconButton, Stack, Typography } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import { auth, db, storage } from '../firebase/firebase';
import './style.css';

const CreatePost = () => {

    let unsubscribe = () => []

    const [user, setUser] = useState('');
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) setUser(user);
            else setUser(null);
        });
    }, [])
    // const navi = useNavigate();
    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState('');
    const [mytext, setMyText] = useState([]);
    const [myimage, setMyImage] = useState([]);
    useEffect(() => {
        // if (user) {
        const docRef = db.collection('Posts').doc(user.uid)
        unsubscribe = docRef.onSnapshot(docSnap => {
            if (docSnap.exists) {
                console.log(docSnap.data().PostText);
                console.log(docSnap.data(url).PostImage);
                setMyText(docSnap.data().PostText);
                setMyImage(docSnap.data(url).PostImage);
            } else {
                console.log("nothing");
            }
        });
        // } 
        // else {
        //     navi('/')
        // }

        // return () => {
        //     unsubscribe()
        // }

    }, []);
    const handleText = (event) => {
        setText(event.target.value);
    }
    const handleImg = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }
    const Input = styled('input')({
        display: 'none'
    });
    const uploadImage = () => {
        const uploadTask = storage.ref(`Images/${image.name}`).put(image);
        uploadTask.on("state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => { console.log(error); },
            () => {
                storage
                    .ref("Images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                    })
            });
    };
    const addPost = () => {
        db.collection('Posts').doc(user.uid).set({
            PostText: [...mytext, text],
            PostImage: [...myimage, url]
        })
    };
    return (
        <>
            <Card sx={{ height: 'auto', width: '60%', m: 'auto', p: 'auto' }} className='accountRoot accountMain'>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" onChange={handleImg} />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <Stack>
                                <PhotoCamera />
                            </Stack>
                        </IconButton>
                        <Button variant="contained" onClick={uploadImage} className='btn'>Upload Image</Button>
                    </label>
                    <Typography variant='h6' component="div" gutterBottom>Uploading done {progress}%</Typography>
                    <img className='imgSize' alt="img" src={url || "https://via.placeholder.com/1080x1080"} />
                    <br />
                    <label>
                        <TextField sx={{ width: '40vw', my: 2 }}
                            onChange={handleText}
                            multiline
                            rows={4}
                            type="text"
                            value={text}
                            autoComplete="off" />
                    </label>
                    <Button variant="contained" onClick={addPost} className='btn'>Post</Button>
                </Box>

            </Card>
            <Card sx={{ height: 'auto', width: '80%', m: 'auto', p: 'auto' }} className='accountRoot accountMain'>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label className='collection'>
                        {myimage.map(url => {
                            return <img className='imgSize' alt="" src={url} />

                        })}
                        {mytext.map(text => {
                            return <TextField sx={{ width: '40vw', my: 2 }} type="text" className='collection-item' value={text} />
                        })}
                    </label>
                </Box>
            </Card>
        </>
    )
}
export default CreatePost;
