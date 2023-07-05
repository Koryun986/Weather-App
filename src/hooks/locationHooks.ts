import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { GeoCode } from "../helpers/API/GeoCodeApi";

export const useLocation = () => {
    const [location, setLocaiton] = useState<GeoCode | null>(null);
    const [error, setError] = useState <any> (null);
    
    useEffect(() => {
        getLatLong();
    }, [])

    async function getLatLong(){
        try{
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                throw new Error('Permission to access location was denied');
            }
            let location : Location.LocationObject = await Location.getCurrentPositionAsync({});
            setLocaiton(location.coords);
        }catch (e) {
            setError(e);
        }
    }

    return { location, error };
}
