import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, FormControlLabel, Button, Checkbox, Grid, Link, makeStyles, Card, CardContent } from '@material-ui/core';
import { LockRounded } from '@material-ui/icons';
// import { ValidatorForm, TextValidator } from 'react-form-validator-core';
import { ValidatorForm, TextValidator } from '../node_modules/SelectValidator';
// import app from '../firebase/db';
// import {ToastContainer, toast} from 'react-toastify';
// import {ScaleLoader} from 'react-spinners';
import "./Components.css"

const LoginComp = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberme, setRememberMe] = useState(false);
    // const [loading, setLoading] = useState(false);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleCheck = (event) => {
        setRememberMe(event.target.checked);
    }
    const handlerLogin = () => {
        // setLoading(true);
        // app.auth()
        //     .signInWithEmailAndPassword(email, password)
        //     .then(response => {
        //         const { user } = response;
        //         const data = {
        //             userId: user.uid,
        //             email: user.email
        //         }
        //         localStorage.setItem('user', JSON.stringify(data));
        //         const storage = localStorage.getItem('user');
        //         const loggedInUser = storage !== null ? JSON.parse(storage) : null;
        //         props.loggedIn(loggedInUser);
        //         setLoading(false);
        //     }).catch(error => {
        //         toast.error(error.message);
        //         setLoading(false);
        //     });

    }
    return (
        <Container component="main" maxWidth="xs">
            <Card className="card">
                <CardContent>
                    {/* <ToastContainer /> */}
                    <CssBaseline />
                    <div className="paper">
                        <Avatar className="avatar">
                            <LockRounded />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign In
                        </Typography>
                        <ValidatorForm
                            onSubmit={handlerLogin}
                            onError={errors => {
                                for (const err of errors) {
                                    console.log(err.props.errorMessages[0])
                                }
                            }}
                            className="form">
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Email"
                                onChange={handleEmail}
                                name="email"
                                value={email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                                autoComplete='off' />
                            <TextValidator
                                variant="outlined"
                                fullWidth
                                label="Password"
                                onChange={handlePassword}
                                name="password"
                                type="password"
                                value={password}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete="off"
                            />
                            <FormControlLabel
                                control={<Checkbox value={rememberme} onChange={(e) => handleCheck(e)} color="primary" />}
                                label="Remember me"
                            />
                            {/* {loading ? (
                                <ScaleLoader
                                className="override"
                                    loading={loading} />
                            ) : (
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className="submit"
                                >
                                    Sign In
                                </Button>
                            )} */}

                            {/* <Grid container>
                                <Grid item>
                                    <Link onClick={props.toggle} className="pointer" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>  */}
                        </ValidatorForm>
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
}

export default LoginComp;
