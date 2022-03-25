import React from 'react';
import { Link } from 'react-router-dom';
import './Ride.css';


const Ride = (props) => {
    const { vehicle, img } = props.ride;

    return (
        <div className='ride-div' >


            <h1>{vehicle}</h1>
            <img className='ride-img' src={img} alt="" />
            <Link to='/ride/confirmation' ><button className='btn btn-danger'>Get Your Ride</button></Link>

        </div>
    );
};

export default Ride;