import { OPEN_WEATHER_API } from "../config.api";
import { IWeatherApi } from "./WeatherApi";

export class OpenWeatherApi implements IWeatherApi {
    private CURRENT_WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=yerevan&appid=${OPEN_WEATHER_API.API_KEY}`;
    private FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=yerevan&appid=${OPEN_WEATHER_API.API_KEY}`;

    getCurrentWeather(): Promise<Object[]> {
        return this.fetchData(this.CURRENT_WEATHER_API_URL);
    }

    getForecast(): Promise<Object[]> {
        return this.fetchData(this.FORECAST_API_URL);
    }

    async fetchData(url: string): Promise<Object[]> {
        try {
            const response = await fetch(url);
            const result = await response.json();
            return result;
        } catch (err) {
            throw new Error("Oops! something went wrong")
        }
    }

}