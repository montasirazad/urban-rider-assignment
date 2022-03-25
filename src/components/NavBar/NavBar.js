import { getAuth, signOut } from "firebase/auth";
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const NavBar = () => {
    const [users, setUsers] = useContext(UserContext);
    const navigate = useNavigate();

    const handleGoogleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUsers({})
            navigate('/home')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className='text-primary'>URBAN RIDER</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
                            <li className="nav-item ms-5">
                                <Link to='/home'><button className='btn btn-success'>HOME</button></Link>
                            </li>

                            <li className="nav-item ms-5">
                                <Link to='/about'><button className='btn btn-success'>ABOUT</button></Link>
                            </li>

                            <li className="nav-item ms-5">
                                {
                                    users.email ? <button className='btn btn-success' onClick={handleGoogleSignOut} >LOG Out</button> :
                                        <Link to='/login'><button className='btn btn-success'>LOG IN</button></Link>
                                }
                            </li>

                        </ul>

                    </div>

                    {
                        users.email &&
                        <div className="d-flex me-4">
                            <img className="ms-4" src={users.image} style={{height:'60px'}} alt="" />  
                            <h4 className="ms-2 mt-2">Welcome,{users.name}</h4>
                            
                        </div>
                    }
                </div>
            </nav>

        </div>
    );
};

export default NavBar;