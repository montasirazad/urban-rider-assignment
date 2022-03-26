import React from 'react';
import { Link } from 'react-router-dom';
import MapBox from '../MapBox/MapBox';
import './RideConfarmation.css'

const RideConfirmation = () => {
    return (
        <div className='rideConfirm-div'>

            

            <div className='confirmation'>
               <Link to='/ride/coming'> <button className='btn btn-warning confirm-btn'>Confirm Ride</button></Link>
               
            </div>


            <div className='confirmation'>
                <MapBox />
            </div>


        </div>
    );
};

export default RideConfirmation;