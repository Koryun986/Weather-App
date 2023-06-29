import { DataFetcher } from "../../DataFetcher";
import { OPEN_WEATHER_API } from "../../config.api";
import { IWeatherApi } from "../WeatherApi";
import { ForecastData, WeatherData } from "./OpenWeatherInterfaces";
  
export class OpenWeatherApi implements IWeatherApi {
    private CURRENT_WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=yerevan&appid=${OPEN_WEATHER_API.API_KEY}`;
    private FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=yerevan&appid=${OPEN_WEATHER_API.API_KEY}`;

    getCurrentWeather(): Promise<WeatherData> {
        return DataFetcher.getData(this.CURRENT_WEATHER_API_URL);
    }

    getForecast(): Promise<ForecastData> {
        return DataFetcher.getData(this.FORECAST_API_URL);
    }

}