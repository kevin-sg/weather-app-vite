import type { IWeatherLocationResponse, IWeatherLocationAdapter } from '@/models';

export function createLocationAdapter(data: IWeatherLocationResponse): IWeatherLocationAdapter[] {
  const location = data.consolidated_weather?.map((entity) => ({
    id             : entity.id,
    date           : entity.applicable_date,
    city_name      : data.title,
    country_name   : data.parent.title,
    state_name     : entity.weather_state_name,
    state_abbr     : entity.weather_state_abbr,
    min_temp       : entity.min_temp,
    max_temp       : entity.max_temp,
    wind_speed     : entity.wind_speed,
    current_temp   : entity.the_temp,
    humidity       : entity.humidity,
    visibility     : entity.visibility,
    air_pressure   : entity.air_pressure,
    predictability : entity.predictability,

    wind_direction         : entity.wind_direction,
    wind_direction_compass : entity.wind_direction_compass,
  }));

  return location;
}
