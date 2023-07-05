import { DataFetcher } from "../DataFetcher";
import { IGecoCodeApi, GeoCode } from "./GeoCodeApi";

export interface BigDataCloudResponseData {
    city: string,
    continent: string,
    countryCode: string,
} 

 export class BigDataCloudApi implements IGecoCodeApi {
    protected latitude: number;
    protected longitude: number;
    private API_URL : string;

    constructor (obj: GeoCode) {
        this.latitude = obj.latitude;
        this.longitude = obj.longitude;
        this.API_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.latitude}&longitude=${this.longitude}&localityLanguage=en`;
    }
    
    async getCity(): Promise<string> {
        const result: BigDataCloudResponseData = await DataFetcher.getData(this.API_URL);
        return result.city;
    }

}