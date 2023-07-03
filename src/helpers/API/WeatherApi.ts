export interface IWeatherApi {
    getCurrentWeather (): Promise<CurrentWeather>,
    getForecast (): Promise<Forecast>,
}

export interface CurrentWeather {
    weather: Weather[]
    main: Main
    visibility: number
}

export interface Forecast {
    list: CurrentWeather[]
    city: City
}

interface Weather {
    main: string
}

interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
}

interface City {
    name: string
    country: string
}