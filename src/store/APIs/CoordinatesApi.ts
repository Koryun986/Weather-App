import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BigDataCloudResponseData } from "../../helpers/API/BigDataCloudApi";
import { COORDINATES_API_REDUCER_PATH } from "../Constants";
import { GeoCode } from "../../helpers/API/GeoCodeApi";

export const CoordinatesApi = createApi({
    reducerPath: COORDINATES_API_REDUCER_PATH,
    baseQuery: fetchBaseQuery({baseUrl: "https://api.bigdatacloud.net/data/reverse-geocode-client"}),
    endpoints: (builder) => ({
        getCityFromCoordinates: builder.query<BigDataCloudResponseData, GeoCode | null>({
            query: (args: GeoCode | null) => `?latitude=${args?.latitude}&longitude=${args?.longitude}&localityLanguage=en`,
        }),
    }),
});

export const { useGetCityFromCoordinatesQuery } = CoordinatesApi;