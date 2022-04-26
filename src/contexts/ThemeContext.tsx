import { useState, createContext } from 'react';

import type { TSystemMode, IThemeContextProps, IThemeProviderValue } from '@/models';

function getInitialTheme(): TSystemMode {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('current-theme') || 'light';

    if (typeof storedPrefs === 'string') return storedPrefs as TSystemMode;

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }
  return 'light'; // light theme as the default;
}

export const ThemeContext = createContext({} as IThemeContextProps);

export function ThemeProvider({ initialTheme, children }: IThemeProviderValue) {
  const [theme, setTheme] = useState<TSystemMode>(getInitialTheme);

  return <ThemeContext.Provider value={{ initialTheme, theme, setTheme }}>{children}</ThemeContext.Provider>;
}
