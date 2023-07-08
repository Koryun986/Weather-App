export interface IWeatherApi {
    getCurrentWeather (): Promise<CurrentWeather>,
    getForecast (): Promise<Forecast>,
}

export interface CurrentWeather {
    weather: Weather[]
    main: Main
    visibility: number
    sys: Sys
    wind: Wind
}

export interface Forecast {
    list: CurrentWeather[]
    city: City
}

interface Weather {
    main: string
}

interface Sys {
    sunrise: number
    sunset: number
}

interface Wind {
    speed: number
    deg: number
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