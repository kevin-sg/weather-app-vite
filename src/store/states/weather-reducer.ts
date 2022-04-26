import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { getWeatherLocation } from '@/services';
import { createLocationAdapter } from '@/adapters';
import type { IWeatherLocationAdapter } from '@/models';

// DOC: https://redux-toolkit.js.org/api/createAsyncThunk

// Actions
export const getLocationThunk = createAsyncThunk<any, { slug: number }>(
  'location/getWeatherLocation',
  async ({ slug }, thunkApi) => {
    try {
      const resp = await getWeatherLocation(slug);
      return createLocationAdapter(resp.data);
    } catch (err: any) {
      let error: AxiosError<any> = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const updateWeatherStateAction = createAction<IWeatherLocationAdapter[]>(
  'updateState/updateWeatherStateAction'
);
export const updateMetricUnitsAction = createAction<{ c: boolean; f: boolean }>(
  'updateMetric/updateMetricUnits'
);

// Initial State
interface InitialState {
  loading: 'idle' | 'pending' | 'success';
  error: string | null | undefined;
  metric_units: { c: boolean; f: boolean };
  entities: IWeatherLocationAdapter[];
}

const initialState: InitialState = {
  error: null,
  loading: 'idle',
  metric_units: { c: true, f: false },
  entities: []
};

// Reducer
export const WeatherReducer = createReducer(initialState, (builder) => {
  builder.addCase(getLocationThunk.pending, (state, action) => {
    if (state.loading === 'idle') {
      return { ...state, loading: 'pending', error: null };
    }
  });
  builder.addCase(getLocationThunk.fulfilled, (state, { payload }) => {
    if (state.loading === 'pending') {
      return { ...state, loading: 'success', error: null, entities: payload };
    }
  });
  builder.addCase(getLocationThunk.rejected, (state, action) => {
    if (action.payload) {
      return { ...state, error: action.error.message };
    }
  });
  builder.addCase(updateWeatherStateAction, (state, { payload }) => {
    if (payload) {
      return { ...state, error: null, entities: payload };
    }
  });
  builder.addCase(updateMetricUnitsAction, (state, { payload }) => {
    if (payload) {
      return { ...state, metric_units: payload };
    }
  });
});
