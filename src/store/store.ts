import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { WEATHER_SLICER } from "./Constants";
import weatherSlice from "./weatherSlice";

const rootReducer = combineReducers({
    [WEATHER_SLICER]: weatherSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof rootReducer>