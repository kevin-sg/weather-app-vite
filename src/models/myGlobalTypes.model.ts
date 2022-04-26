import type { ButtonHTMLAttributes, ChangeEvent, FormEvent, ReactElement, ReactNode } from 'react';

// *******************************************************
//                This is type Adapter Response
// *******************************************************

/**
 * Interfaces types weather lattitude & longitude adapter
 */
export interface IWeatherLattlongAdapter {
  woeid: number;
  distance: number;
  name_city: string;
  latt_long: string;
  location: string;
}

/**
 * Interfaces types weather location adapter
 */
export interface IWeatherLocationAdapter {
  id: number;
  country_name: string;
  city_name: string;
  state_name: string;
  state_abbr: string;
  date: string;
  min_temp: number;
  max_temp: number;
  current_temp: number;
  wind_speed: number;
  wind_direction: number;
  wind_direction_compass: string;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

/**
 * Interface types weather query adapter
 */
export interface IWeatherQueryAdapter {
  woeid: number;
  location: string;
  name_city: string;
  latt_long: string;
}

// *******************************************************
//               This is types of context Theme
// *******************************************************

/**
 * Type system mode theme
 */
export type TSystemMode = 'light' | 'dark';

export interface IThemeContextProps {
  initialTheme?: TSystemMode;
  theme: TSystemMode;
  setTheme: (x: TSystemMode) => void;
}

export interface IThemeProviderValue {
  initialTheme?: TSystemMode;
  children: ReactElement | ReactElement[];
}

// *******************************************************
//               This is types of context Toast
// *******************************************************

export interface InitialToastState {
  type: 'idle' | 'success' | 'error';
  isOpen?: boolean;
  message: string | null | undefined;
}

export interface IToastContextProps {
  toastData: InitialToastState;
  setToastData: (state: InitialToastState) => void;
  resetToast: () => void;
}

export interface IToastProviderValue {
  initialTheme?: string;
  children: ReactElement | ReactElement[];
}

// *******************************************************
//                This is types useCustomForm
// *******************************************************

/**
 * Interface types of any values useCustomForm
 */
export interface InitialCustomFormState {
  [x: string]: any;
}

export interface useFormCustomHook {
  formData: InitialCustomFormState;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  resetForm?: () => void;
}

// *******************************************************
//                This is types Geolocation
// *******************************************************

export interface TGeoCoords {
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number;
  longitude: number;
  speed: number | null;
}

export interface TGeoCoordsSuccess {
  coords: TGeoCoords;
  timestamp: number;
}

export type TGeoSuccess = { latitude: number; longitude: number };
export type TGeoError = { code: number; message: string };

// *******************************************************
//          This is types custom props components
// *******************************************************

export interface ItemsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  setIsOpen?: any;
  entities: IWeatherQueryAdapter;
}

export interface ILocationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  enabled?: boolean;
  loading?: 'idle' | 'pending' | 'success' | 'error';
}

export interface ISearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: 'button' | 'submit';
  loading?: 'idle' | 'pending' | 'success' | 'error';
}

export interface IToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  selected?: boolean;
}

export interface ICardFectureProps {
  text: string;
  description: number;
  detail: string;
  className?: string;
  heightClass?: string;
  children?: ReactNode;
}

export interface ICardWeatherProps extends IWeatherLocationAdapter {
  metric_units: { c: boolean; f: boolean };
}

export interface IDirectionStatusProps {
  text: string;
  direction: number;
}

export interface IContainerLayoutProps {
  children: ReactElement | ReactElement[];
}
