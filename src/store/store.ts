import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { COORDINATES_API_REDUCER_PATH, WEATHER_SLICER } from "./Constants";
import weatherSlice from "./weatherSlice";
import { CoordinatesApi } from "./APIs/CoordinatesApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const rootReducer = combineReducers({
    [WEATHER_SLICER]: weatherSlice,
    [COORDINATES_API_REDUCER_PATH]: CoordinatesApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CoordinatesApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;

setupListeners(store.dispatch);