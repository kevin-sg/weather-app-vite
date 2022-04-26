import type { IWeatherQueryAdapter, IWeatherQueryResponse } from "@/models";

export function createWeatherQueryAdapter(query: IWeatherQueryResponse): IWeatherQueryAdapter {
  return {
    woeid     : query.woeid,
    name_city : query.title,
    latt_long : query.latt_long,
    location  : query.location_type
  };
}
