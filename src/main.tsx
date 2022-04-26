import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';

import './index.css';
import App from '@/App';

import { store } from '@/store';
import { ContentToast } from '@/components';
import { ThemeProvider, ToastProvider } from '@/contexts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <ToastProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <ContentToast />
        </ToastProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
