import { initializeApp } from 'firebase/app';

import {
    getAuth, GoogleAuthProvider, signInWithPopup,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile
} from "firebase/auth";

import React, { useContext } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from '../../firebase/firebaseConfig';
import './LogIn.css';



const LogIn = () => {

    const [users, setUsers] = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false)
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const app = initializeApp(firebaseConfig);


    const handleGoogleSignIn = (params) => {

        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const { displayName, email, photoURL } = user;
                // console.log(user);
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    image: photoURL,
                    isLoggedIn: true,

                }
                setUsers(loggedInUser);
                navigate('/ride/confirmation')



            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage);
                setError(errorMessage)

            });

    }

    const handleEmail = (e) => {

        setEmail(e.target.value);
    };

    const handlePassword = (e) => {

        setPassword(e.target.value)
    };

    const handleName = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }
    const handleNewRegistration = (e) => {
        e.preventDefault()

        checked ? registeredSignIn(email, password) :
            handleCreateNewUser(email, password)
    }

    const handleCreateNewUser = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const { displayName, photoURL } = user;
                updateUserName()

                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)

            });
    }
    const handleCheckBox = (e) => {
        setChecked(e.target.checked);
    }

    const registeredSignIn = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const { displayName, photoURL, email } = user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    image: photoURL,
                    isLoggedIn: true,

                }
                setUsers(loggedInUser);
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorMessage);

            });
    }

    const updateUserName = () => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    return (
        <div>




            {

                !users.email &&

                <div className=' logIn-container'>

                    <h1 className='m-4 text-danger'>For Log in using Google Account</h1>

                    <button onClick={handleGoogleSignIn} className='btn btn-primary'> Click here  </button> <br />



                    <h1 className='text-danger'>Or</h1>

                    <form onSubmit={handleNewRegistration} className='border border-danger  w-50 p-3 rounded'>
                        <h3 className='text-primary'> Please  {!checked ? 'Register' : 'Log In'}</h3>

                        <div className="mb-3 ">

                            {!checked &&
                                <div>
                                    <label className="form-label">Name</label>

                                    <input onBlur={handleName} type="text" className="form-control" />

                                </div>
                            }


                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                            <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                            <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input onChange={handleCheckBox} type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Already registered ..? click here to log in.</label>
                        </div>


                        <button type="submit" className="btn btn-primary">{checked ? 'Log In' : 'Register'}</button>

                    </form>
                    {
                        error && <h4 className='text-danger bg-white mt-3'>{error}</h4>
                    }
                </div>
            }
        </div>
    );
};

export default LogIn;