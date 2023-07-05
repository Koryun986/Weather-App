import * as Location from 'expo-location';
import { FC, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux"
import { useLocation } from '../hooks/locationHooks';
import { COLOR_SECONDARY, fonts } from '../helpers/styles/StyleConstants';
import { useDate } from '../hooks/DateHooks';
import { IWeatherState } from '../store/weatherSlice';
import { WEATHER_SLICER } from '../store/Constants';
import { RootState } from '../store/store';
import { useGetCityFromCoordinatesQuery } from '../store/APIs/CoordinatesApi';

export const LocationInfoBar: FC = () => {
    const [error, setError] = useState<any>(null);
    const { location, error : coordsError } = useLocation();
    const { date } = useDate();
    const { data, error: cityError, isLoading } = useGetCityFromCoordinatesQuery(location);
    const city = data?.city;
    // const city = useSelector<RootState, string | null>(state => state.weather.city);
    
    if (coordsError || cityError) {
        setError(coordsError || cityError);
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
        fontSize: 25,
    },
    date: {
        color: COLOR_SECONDARY,
            fontWeight: "bold",
    }
})