import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BigDataCloudResponseData } from "../../helpers/API/BigDataCloudApi";
import { OPEN_WEATHER_API_REDUCER_PATH } from "../Constants";
import { GeoCode } from "../../helpers/API/GeoCodeApi";
import { OPEN_WEATHER_API } from './../../helpers/config.api';
import { ForecastData, WeatherData } from "../../helpers/API/OpenWeatherApi/OpenWeatherInterfaces";

export const OpenWeatherApi = createApi({
    reducerPath: OPEN_WEATHER_API_REDUCER_PATH,
    baseQuery: fetchBaseQuery({baseUrl: "https://api.openweathermap.org/data/2.5/"}),
    endpoints: (builder) => ({
        getCurrentWeather: builder.query<WeatherData, string | null>({
            query: (city) => `weather?q=${city}&appid=${OPEN_WEATHER_API.API_KEY}`
        }),
        getForecast: builder.query<ForecastData, string>({
            query: (city) => `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPEN_WEATHER_API.API_KEY}`
        }),
    }),
});

export const { useGetCurrentWeatherQuery, useGetForecastQuery } = OpenWeatherApi;