import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import * as typeST from '@/store/states';

export const store = configureStore({
  reducer: {
    alert: typeST.ToastReducer,
    geolocationWeather: typeST.LattlongReducer,
    searchWeather: typeST.WeatherReducer,
    queryWeather: typeST.QueryReducer
  }
});

export type RootState = ReturnType<typeof store['getState']>;
export type AppDispatch = typeof store['dispatch'];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
