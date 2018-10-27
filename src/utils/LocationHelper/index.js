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

