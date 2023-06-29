import { CurrenctWeather, Forecast } from "../WeatherApi"

export interface WeatherData extends CurrenctWeather {
    weather: Weather[]
    main: Main
    visibility: number
    wind: Wind
    clouds: Clouds
    dt: number
    sys: Sys
    timezone: number
}

export interface ForecastData extends Forecast {
    list: List[]
    city: City
}

interface Coord {
    lon: number
    lat: number
}

interface List extends WeatherData {
    dt_txt: string
    rain?: Rain
}

interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
}

interface Wind {
    speed: number
    deg: number
}
 
interface Clouds {
    all: number
}
  
interface Sys {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
}

interface Rain {
    "3h": number
}
  
interface City {
    id: number
    name: string
    coord: Coord
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
}

  