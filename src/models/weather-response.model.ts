
// *******************************************************
//               This is types of API Response
// *******************************************************

/**
 * Interface type weather lattitude & longitude response
 */
 export interface IWeatherLattlongResponse {
    distance:      number;
    title:         string;
    location_type: LocationType;
    woeid:         number;
    latt_long:     string;
}

export enum LocationType {
    City = "City",
}

/**
 * Interface type weather location response
 */
 export interface IWeatherLocationResponse {
    consolidated_weather: IConsolidatedWeather[];
    time:                 string;
    sun_rise:             string;
    sun_set:              string;
    timezone_name:        string;
    parent:               Parent;
    sources:              Source[];
    title:                string;
    location_type:        string;
    woeid:                number;
    latt_long:            string;
    timezone:             string;
}

export interface IConsolidatedWeather {
    id:                     number;
    weather_state_name:     string;
    weather_state_abbr:     string;
    wind_direction_compass: string;
    created:                string;
    applicable_date:        string;
    min_temp:               number;
    max_temp:               number;
    the_temp:               number;
    wind_speed:             number;
    wind_direction:         number;
    air_pressure:           number;
    humidity:               number;
    visibility:             number;
    predictability:         number;
}

export interface Parent {
    title:         string;
    location_type: string;
    woeid:         number;
    latt_long:     string;
}

export interface Source {
    title:      string;
    slug:       string;
    url:        string;
    crawl_rate: number;
}

/**
 * Interface type weather query response
 */
 export interface IWeatherQueryResponse {
    title:         string;
    location_type: string;
    woeid:         number;
    latt_long:     string;
}
