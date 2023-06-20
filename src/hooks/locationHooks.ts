import { BigDataCloudApi } from './../helpers/API/BigDataCloudApi';
import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { GeoCode } from "../helpers/API/GeoCodeApi";

export const useLocation = () => {
    const [location, setLocation] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState <any> (null);
    
    useEffect(() => {
        getLatLong();
    })

    const getLatLong = async () => {
        try{
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                throw new Error('Permission to access location was denied');
            }
            let location : Location.LocationObject = await Location.getCurrentPositionAsync({});
            getCityfromCoordinates(location.coords);
        }catch (e) {
            setErrorMsg(e);
        }
    }

    const getCityfromCoordinates = async (locationObj: GeoCode) => {
        try {
            const bigDataCloudApi = new BigDataCloudApi(locationObj);
            const city = await bigDataCloudApi.getCity();
            setLocation(city);
        } catch(e) {
            setErrorMsg(e);
        }
    }


    return { location, errorMsg };
}