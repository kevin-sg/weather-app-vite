import axios from 'axios';

import * as typesMD from '@/models';

// DOC: // https://www.metaweather.com/api/

const HEROKU_CROSS_ORIGIN = import.meta.env.VITE_APP_CORS_HEROKU_CROSS_ORIGIN;
const META_WEATHER_API = import.meta.env.VITE_APP_META_WEATHER_API;

export function getWeatherLocation(slug: number) {
  return axios.get<typesMD.IWeatherLocationResponse>(
    `${HEROKU_CROSS_ORIGIN}/${META_WEATHER_API}/location/${slug}`
  );
}

export function getWeatherQuery(slug?: string) {
  return axios.get<typesMD.IWeatherQueryResponse[]>(
    `${HEROKU_CROSS_ORIGIN}/${META_WEATHER_API}/location/search/?query=${slug}`
  );
}

export function getWeatherLattloong(slug1: number, slug2: number) {
  return axios.get<typesMD.IWeatherLattlongResponse[]>(
    `${HEROKU_CROSS_ORIGIN}/${META_WEATHER_API}/location/search/?lattlong=${slug1},${slug2}`
  );
}
