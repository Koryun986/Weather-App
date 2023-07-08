import { Appearance, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { CurrentWeather } from "../helpers/API/WeatherApi";
import { WeatherData } from "../helpers/API/OpenWeatherApi/OpenWeatherInterfaces";
import { convertTimestampToTime } from './../helpers/utils';
import { WeatherInfoItem } from "./WeatherInfoItem";
import images from "../../assets/resources/images";
import { Line } from "../helpers/styles/UI/Line";

enum InfoItemText {
    SUNRISE = "SUNRISE",
    SUNSET = "SUNSET",
    WIND = "WIND",
}

const colorScheme = Appearance.getColorScheme();
const isLightTheme = colorScheme === "light";

export const WeatherOtherInfo = () => {
    const currentWeather = useSelector<RootState>(state => state.weather.currentWeather) as CurrentWeather;
    const sunriseTimestamp = currentWeather?.sys?.sunrise;
    const sunsetTimestamp = currentWeather?.sys?.sunset;
    const wind = Math.floor(currentWeather?.wind?.speed);
    const sunrise = convertTimestampToTime(sunriseTimestamp);
    const sunset = convertTimestampToTime(sunsetTimestamp);

    return (
        <View style={styles.container}>
            <WeatherInfoItem image={isLightTheme ? images.darkIconSunrise : images.lightIconSunrise} text={InfoItemText.SUNRISE} data={sunrise} />
                <Line lineType="vertical"/>
            <WeatherInfoItem image={isLightTheme ? images.darkIconTemperature : images.lightIconTemperature} text={InfoItemText.WIND} data={wind.toString()} />
                <Line lineType="vertical"/>
            <WeatherInfoItem image={isLightTheme ? images.darkIconSunrise : images.lightIconSunrise} text={InfoItemText.SUNSET} data={sunset} />
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center", 
    }
});
