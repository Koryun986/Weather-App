import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLOR_SECONDARY, TRANSPARENT_COLOR_SECONDARY } from "../helpers/styles/StyleConstants";
import { useGetCurrentWeatherQuery } from "../store/APIs/OpenWeatherApi";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { setCurrentWeather } from "../store/weatherSlice";
import { Line } from "../helpers/styles/UI/Line";

enum DayParts {
    MORNING = "MORNING",
    AFTERNOON = "AFTERNOON",
    EVENING = "EVENING",
}

export const WeatherInfo = () => {
    const dispatch = useDispatch();
    const city = useSelector<RootState>(state => state.weather.city) as string;
    const { data, error, isLoading } = useGetCurrentWeatherQuery(city);
    const weather = setFormatedWeather(data?.main?.temp as number);
    const dayPart = getDayPart();

    if(data) 
        dispatch(setCurrentWeather(data));

    function setFormatedWeather(kelvin: number) {
        return Math.floor(kelvin - 273);
    }

    function getDayPart() {
        const date = new Date();
        const hours = date.getHours();
        if(hours > 18) 
            return DayParts.EVENING;
        if(hours > 12) 
            return DayParts.AFTERNOON;
        return DayParts.MORNING;
    }

    return (
        <View style={styles.container}>
            <View style={styles.weatherDegreeBar}>
                <Text style={styles.weatherDegreeText}>{weather ? weather : ""}</Text>
                <Text style={styles.weatherDegreeSymbol}>&deg;C</Text>
            </View>
            <Text style={styles.dayPart}>GOOD {dayPart}</Text>
            <Line lineType="horizontal" />
        </View>)  
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    weatherDegreeBar: {
        flexDirection: "row",
        alignItems: "center",
    },
    weatherDegreeText: {
        color: COLOR_SECONDARY,
        fontSize: 35,
    },
    weatherDegreeSymbol: {
        color: COLOR_SECONDARY,
        fontSize: 22,
    },
    dayPart: {
        color: TRANSPARENT_COLOR_SECONDARY,
        fontSize: 20,
    }
    
});