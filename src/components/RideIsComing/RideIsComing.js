import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const RideIsComing = () => {
    return (
        <div className='App'>
            <h1>Your Ride is on the Way</h1>
            <h3>Please, wait a moment</h3>
            <Link to='/'>
                <button className='btn btn-primary'><FontAwesomeIcon icon={faArrowLeft} />  Back to Home</button></Link>
        </div>
    );
};

export default RideIsComing;