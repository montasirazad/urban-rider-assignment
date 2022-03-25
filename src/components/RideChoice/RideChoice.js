import React from 'react';
import Ride from '../Ride/Ride';
import './RideChoice.css';
import Bus from '../../images/bus.png'
import Bike from '../../images/bike.png'
import Car from '../../images/car.png'
import Train from '../../images/train.png'

const rideInfo = [
    {
        vehicle: 'BIKE',
        img: Bike,
        id: 1
    },

    {
        vehicle: 'CAR',
        img: Car,
        id: 2
    },

    {
        vehicle: 'BUS',
        img: Bus,
        id: 3
    },

    {
        vehicle: 'TRAIN',
        img: Train,
        id: 4
    }
]
const RideChoice = () => {



    return (
        <div className='rideChoice-container'>

            {
                rideInfo.map(ride => <Ride ride={ride} key={ride.id}></Ride>)
            }
        </div>
    );
};

export default RideChoice;