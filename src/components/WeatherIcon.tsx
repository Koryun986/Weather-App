import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Asset, useAssets } from 'expo-asset';
import images from "./../../assets/resources/images";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { CurrentWeather } from "../helpers/API/WeatherApi";

type WeatherTypes = "Rain" | "Snow" | "Clouds" | "Clear" | "Drizzle" | "Thunderstorm" | "Atmosphere";

const Weathers = {
    Rain: images.iconRainy,
    Snow: images.iconSnowy,
    Clouds: images.iconCloudy,
    Clear: images.iconSunny,
    Drizzle: images.iconDrizzly,
    Thunderstorm: images.iconStormy,
    Atmosphere: images.iconCloudy,
}

export const WeatherIcon = () => {
    const currentWeather = useSelector<RootState>(state => state.weather.currentWeather) as CurrentWeather;
    const weatherState = currentWeather?.weather[0]?.main as WeatherTypes;
    const weatherImage = Weathers?.[weatherState];
    
    return (<View style={styles.container}>
            <Image 
            style={styles.icon}
            source={weatherImage}
            />
        </View>);
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 100,
        height: 100,
    }
})