import { BigDataCloudApi } from './../helpers/API/BigDataCloudApi';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import * as Location from 'expo-location';
import { GeoCode } from "../helpers/API/GeoCodeApi";
import { setCity } from '../store/weatherSlice';

export const useLocation = () => {
    const [error, seterror] = useState <any> (null);
    const disatch = useDispatch();
    
    useEffect(() => {
        getLatLong();
    })

    async function getLatLong(){
        try{
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                throw new Error('Permission to access location was denied');
            }
            let location : Location.LocationObject = await Location.getCurrentPositionAsync({});
            getCityfromCoordinates(location.coords);
        }catch (e) {
            seterror(e);
        }
    }

    async function getCityfromCoordinates(locationObj: GeoCode) {
        try {
            const bigDataCloudApi = new BigDataCloudApi(locationObj);
            let city = await bigDataCloudApi.getCity();
            city = formatString(city);
            disatch(setCity(city));
        } catch(e) {
            seterror(e);
        }
    }

    function formatString(city:string): string {
        const formatedCity = city.replace(/['".*+?^${}()|[\]\\]/g, "");
        return formatedCity;
    }

    return {  error };
}