import { Card, Button } from '@mui/material';
import React, { useState, useEffect } from "react";
import { auth, db } from '../firebase/firebase';
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
    const [img, setImg] = useState('');
    const handleText = (event) => {
        setText(event.target.value);
    }
    const handleImg = (event) => {
        setImg(event.target.value);
    }
    const addPost = () => {
        db.collection('Posts').doc(user.uid).set({
            PostText: text,
            postImage: img
        })
    }
    return (
        <>
            <NavBar />
            <h1>Dashboard</h1>

            <div className='accountRoot'>
                <Card sx={{ width:'100vh' }}  className='accountMain'>
                        <form>
                            <input type="file" name="postImage" id="postImage" onChange={handleImg}
                                value={img}  />
                            {/* <input type="image" src="https://pkge.net/uploads/couriers/large/india-post.png?2" alt=""
                                onChange={handleImg}
                                value={img} /> */}
                            <textarea cols="60" rows="15"
                                onChange={handleText}
                                type="text"
                                value={text}
                                autoComplete="off"></textarea>
                            <Button variant="contained" onClick={() => { addPost() }}  className='btn'>Post</Button>
                        </form>
                </Card>
            </div>
        </>
    )
}

export default Dashboard;
