import React, { useState, useEffect } from "react";
import { Card, Button } from '@mui/material';
import { auth, db, storage } from '../firebase/firebase';
import './style.css';

const CreatePost = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) setUser(user)
            else setUser(null)
        })
    }, [])
    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState('');

    const handleText = (event) => {
        setText(event.target.value);
    }
    const handleImg = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }
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
            PostText: text,
            postImage: url
        })
    };
    return (
        <div className='accountRoot'>
            <Card sx={{ width: '100vh' }} className='accountMain'>
                <form>
                    <input type="file" onChange={handleImg} />
                    <Button variant="contained" onClick={uploadImage} className='btn'>Upload Image</Button>
                    <h2>Uploading done {progress}%</h2>
                    <img className='imgSize' src={url || "https://via.placeholder.com/300x300"} />
                    <textarea cols="50" rows="15"
                        onChange={handleText}
                        type="text"
                        value={text}
                        autoComplete="off"></textarea>
                    <Button variant="contained" onClick={addPost} className='btn'>Post</Button>
                </form>
            </Card>
        </div>
    )
}

export default CreatePost
