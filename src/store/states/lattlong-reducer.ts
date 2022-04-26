import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { getWeatherLattloong } from '@/services';
import type { IWeatherLattlongAdapter } from '@/models';
import { createWeatherLattlongAdapter } from '@/adapters';

// Actions
export const getLattlongThunk = createAsyncThunk<any, { slug1: number; slug2: number }>(
  'lattlong/getLattlongThunk',
  async ({ slug1, slug2 }, thunkApi) => {
    try {
      const { data } = await getWeatherLattloong(slug1, slug2);
      return createWeatherLattlongAdapter(data[0]);
    } catch (err: any) {
      let error: AxiosError<any> = err;
      if (!error.response) {
        throw err;
      }
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const resetLattlongAction = createAction('reset/resetLattlongAction');

interface InitialState {
  loading: 'idle' | 'pending' | 'success' | 'error';
  enabled: boolean;
  geo_lattlong: IWeatherLattlongAdapter;
  error: string | null | undefined;
}

const initialState: InitialState = {
  error: null,
  loading: 'idle',
  enabled: false,
  geo_lattlong: {} as IWeatherLattlongAdapter
};

export const LattlongReducer = createReducer(initialState, (builder) => {
  builder.addCase(getLattlongThunk.pending, (state, action) => {
    if (state.loading === 'idle') {
      return {
        ...state,
        loading: 'pending',
        enabled: false,
        geo_lattlong: {} as IWeatherLattlongAdapter
      };
    }
  });
  builder.addCase(getLattlongThunk.fulfilled, (state, { payload }) => {
    if (state.loading === 'pending') {
      return { ...state, loading: 'success', enabled: true, geo_lattlong: payload };
    }
  });
  builder.addCase(getLattlongThunk.rejected, (state, action) => {
    if (action.payload) {
      return {
        ...state,
        loading: 'idle',
        enabled: false,
        error: action.error.message,
        geo_lattlong: {} as IWeatherLattlongAdapter
      };
    }
  });
  builder.addCase(resetLattlongAction, (state, action) => {
    return {
      ...state,
      loading: 'idle',
      enabled: false,
      geo_lattlong: {} as IWeatherLattlongAdapter
    };
  });
});
