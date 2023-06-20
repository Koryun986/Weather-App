export type GeoCode = {
    latitude: number,
    longitude: number,
}

type City = string;

export interface IGecoCodeApi{
    getCity() : Promise<City>,
}

