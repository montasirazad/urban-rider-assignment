import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from '../../firebase/firebaseConfig';
import './LogIn.css';



const LogIn = () => {

    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        const app = initializeApp(firebaseConfig);
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const { displayName, email, photoURL } = user;
                console.log(user);
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    image: photoURL,
                    isLoggedIn: true
                }
                setUser(loggedInUser);
                navigate('/home')

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage);

            });

    }


    return (
        <div className=' logIn-container'>

            <h1 className='m-4 text-danger'>For Log in using Google Account</h1>

            <button onClick={handleGoogleSignIn} className='btn btn-primary'> Click here  </button> <br />



            <h1 className='text-danger'>Or</h1>
            <form className='border border-danger  w-50 p-3 rounded'>
                <h3 className='text-primary'>Please Register</h3>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Already registered ..? click here to log in.</label>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    );
};

export default LogIn;