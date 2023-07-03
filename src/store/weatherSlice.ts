import { createSlice } from "@reduxjs/toolkit";
import { WEATHER_SLICER } from "./Constants";
import { CurrentWeather, Forecast } from "../helpers/API/WeatherApi";

export interface IWeatherState {
    currentWeather: CurrentWeather | null,
    forecast: Forecast | null,
    city: string | null,
}

const weatherSlice = createSlice({
    name: WEATHER_SLICER,
    initialState: {
        currentWeather: null,
        forecast: null,
        city: null,
    } as IWeatherState,
    reducers: {
        setCity(state, action){
            state.city = action.payload;
        },
        setCurrentWeather(state, action) {
            state.currentWeather = action.payload;
        },
        setForecast(state, action) {
            state.forecast = action.payload;
        }
    },
});

export default weatherSlice.reducer;
export const { setCity, setForecast, setCurrentWeather } = weatherSlice.actions;