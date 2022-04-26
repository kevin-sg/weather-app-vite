import type { IWeatherLattlongAdapter, IWeatherLattlongResponse } from "@/models";

export function createWeatherLattlongAdapter(lattlong: IWeatherLattlongResponse): IWeatherLattlongAdapter {
  return {
    woeid     : lattlong.woeid,
    name_city : lattlong.title,
    distance  : lattlong.distance,
    latt_long : lattlong.latt_long,
    location  : lattlong.location_type
  };
}
