import { Card, Button } from '@mui/material';
import React, { useState, useEffect } from "react";
import { auth, db, storage } from '../firebase/firebase';
import NavBar from '../components/NavBar';
import '../components/style.css'

const Dashboard = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) setUser(user)
            else setUser(null)
        })
    }, [])
    const [text, setText] = useState('');
    const [image, setImg] = useState('');
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);


    const handleText = (event) => {
        setText(event.target.value);
    }
    const handleImg = (e) => {
        
        if (e.target.files[0]) {
            setImg(e.target.files[0])
        };
    }
    const uploadImage = () =>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // const progress = Math.round(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
        // setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
    }
    const addPost = () => {

        // db.collection('Posts').doc(user.uid).set({
        //     PostText: text,
        //     postImage: url
        // })
    };
    // console.log("image: ", image);

    return (
        <>
            <NavBar />
            <h1>Dashboard</h1>

            <div className='accountRoot'>
                <Card sx={{ width: '100vh' }} className='accountMain'>
                    <form>
                        <input type="file" name="postImage" id="postImage" value={image} onChange={handleImg} />
                        <Button variant="contained" onClick={uploadImage} className='btn'>Upload Image</Button>
                        <h2>Uploading done {progress}%</h2>
                        {url}
                        <textarea cols="75" rows="15"
                            onChange={handleText}
                            type="text"
                            value={text}
                            autoComplete="off"></textarea>
                        <Button variant="contained" onClick={addPost} className='btn'>Post</Button>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default Dashboard;
