import * as Location from 'expo-location';
import { FC, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux"
import { useLocation } from '../hooks/locationHooks';
import { COLOR_SECONDARY, fonts } from '../helpers/styles/StyleConstants';
import { useDate } from '../hooks/DateHooks';
import { IWeatherState, setCity } from '../store/weatherSlice';
import { WEATHER_SLICER } from '../store/Constants';
import { RootState } from '../store/store';
import { useGetCityFromCoordinatesQuery } from '../store/APIs/CoordinatesApi';
import { useDispatch } from 'react-redux';

export const LocationInfoBar: FC = () => {
    const dispatch = useDispatch();
    const { location, error : coordsError } = useLocation();
    const { date } = useDate();
    const { data, error: cityError, isLoading } = useGetCityFromCoordinatesQuery(location);
    const city = data?.city;
    
    if (!(coordsError || cityError)) {
        dispatch(setCity(city));
    } 

    return (
        <View style={styles.container}>
            <Text style={styles.city} > { city }</Text>
            <Text style={styles.date} > { date }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    city: {
        color: COLOR_SECONDARY,
        ...fonts.lightFont,
        fontSize: 35,
    },
    date: {
        color: COLOR_SECONDARY,
            fontWeight: "bold",
    }
})