export interface IWeatherApi {
    getCurrentWeather (): Promise<CurrenctWeather>,
    getForecast (): Promise<Forecast>,
}

export interface CurrenctWeather {
    weather: Weather[]
    main: Main
    visibility: number
}

export interface Forecast {
    list: CurrenctWeather[]
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