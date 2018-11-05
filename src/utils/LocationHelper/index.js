/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the Geolocation Service.
 * @author ADAMO
 * @since  10/15/2018
 */
import Geolocation from 'react-native-geolocation-service';

export function getLocation() {
    return new Promise((resolve, reject) => {
        // Instead of navigator.geolocation, just use Geolocation.
        Geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => {
                // See error code charts below.
                reject(error)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    })
}

