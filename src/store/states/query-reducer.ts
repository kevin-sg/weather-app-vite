import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { getWeatherQuery } from '@/services';
import type { IWeatherQueryAdapter } from '@/models';
import { createWeatherQueryAdapter } from '@/adapters';

// Actions
export const getQueryThunk = createAsyncThunk<any, { slug: string }>(
  'query/getQueryThunk',
  async ({ slug }, thunkApi) => {
    try {
      const { data } = await getWeatherQuery(slug);
      return createWeatherQueryAdapter(data[0]);
    } catch (err: any) {
      let error: AxiosError<any> = err;
      if (!error.response) {
        throw err;
      }
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const resetQueryAction = createAction<undefined | null>('reset/resetQueryAction');

// Initial State
interface InitialState {
  loading: 'idle' | 'pending' | 'success' | 'error';
  search_entities: IWeatherQueryAdapter;
  error: string | null | undefined;
}

const initialState: InitialState = {
  error: null,
  loading: 'idle',
  search_entities: {} as IWeatherQueryAdapter
};

// Reducer
export const QueryReducer = createReducer(initialState, (builder) => {
  builder.addCase(getQueryThunk.pending, (state, action) => {
    if (state.loading === 'idle') {
      return {
        ...state,
        error: null,
        loading: 'pending',
        search_entities: {} as IWeatherQueryAdapter
      };
    }
  });
  builder.addCase(getQueryThunk.fulfilled, (state, { payload }) => {
    if (state.loading === 'pending') {
      return { ...state, loading: 'success', error: null, search_entities: payload };
    }
  });
  builder.addCase(getQueryThunk.rejected, (state, action) => {
    if (action.payload) {
      return { ...state, loading: 'error', error: action.error.message };
    }
  });
  builder.addCase(resetQueryAction, (state, action) => {
    return { ...state, loading: 'idle', search_entities: {} as IWeatherQueryAdapter };
  });
});
