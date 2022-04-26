import { createContext, useState } from 'react';

import type { InitialToastState, IToastContextProps, IToastProviderValue } from '@/models';

const initialState: InitialToastState = {
  type: 'idle',
  isOpen: false,
  message: null
};

export const ToastContext = createContext({} as IToastContextProps);

export function ToastProvider({ children }: IToastProviderValue) {
  const [toastData, setToastData] = useState(initialState as InitialToastState);

  function resetToast() {
    setToastData({ ...initialState, isOpen: false });
  }

  return (
    <ToastContext.Provider value={{ toastData, setToastData, resetToast }}>{children}</ToastContext.Provider>
  );
}
