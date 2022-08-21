import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import NewsSlice from "./newsSlice";
const rootReducer = combineReducers({
    allNews: NewsSlice.reducer,
    currentNews: NewsSlice.reducer
})
export const store = configureStore({
    reducer:rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[],
            ignoredPaths:[]
        }
    })
})