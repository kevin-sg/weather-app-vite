import { createAction, createReducer } from '@reduxjs/toolkit';

// Actions
export const openToastAction = createAction<InitialState>('open/openToastAction');
export const closeToastAction = createAction<void>('close/closeToastAction');
export const resetToastAction = createAction<void>('close/resetToastAction');

// Initial State
interface InitialState {
  type: 'idle' | 'success' | 'error';
  isOpen: boolean;
  message: string | null | undefined;
}

const initialState: InitialState = {
  type: 'idle',
  isOpen: false,
  message: null
};

// Reducer
export const ToastReducer = createReducer(initialState, (builder) => {
  builder.addCase(openToastAction, (state, { payload }) => {
    if (state.type === 'idle') {
      return { ...state, type: payload.type, isOpen: true, message: payload.message };
    }
  });
  builder.addCase(resetToastAction, (state, action) => {
    if (!action.payload) {
      return { ...state, type: 'idle', message: null };
    }
  });
  builder.addCase(closeToastAction, (state, { payload }) => {
    if (!payload) {
      return { ...state, isOpen: false };
    }
  });
});
