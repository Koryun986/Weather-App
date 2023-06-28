export interface IWeatherApi {
    getCurrentWeather (): Promise<Object[]>,
    getForecast (): Promise<Object[]>,
}