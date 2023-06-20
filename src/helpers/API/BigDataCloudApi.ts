import { IGecoCodeApi, GeoCode } from "./GeoCodeApi";

interface BigDataCloudResponseData {
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
        try{
            const resonse = await fetch(this.API_URL);
            const result: BigDataCloudResponseData = await resonse.json();
            return result.city;
        }catch (e) {
            throw new Error("Oops! something went wrong");
        }
    }

}