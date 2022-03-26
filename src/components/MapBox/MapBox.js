import React from 'react';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import mapboxGl from 'mapbox-gl';
import { useEffect } from 'react';
import './MapBox.css';




const MapBox = () => {

    useEffect(() => {
        mapboxGl.accessToken = 'pk.eyJ1IjoibW9udGFzaXJhemFkIiwiYSI6ImNsMTd2cTRzcTFoMDAzcHAzeWpsaGgxbXYifQ.GgUMx1sWe9FFVUnqiM7pMw';
        const map = new mapboxGl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.4125, 23.8103],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxGl.accessToken
            }),
            'top-left'
        );
    }, [])

    return (
     
            <div id="map"></div>
         
    );
};

export default MapBox;