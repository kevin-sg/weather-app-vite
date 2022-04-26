import * as typeWT from '@/assets';

enum TWeatherStates {
  SNOW         = 'SN',
  CLEAR        = 'C',
  SLEET        = 'SL',
  HAIL         = 'H',
  SHOWERS      = 'S',
  HEAVY_RAIN   = 'HR',
  LIGHT_RAIN   = 'LR',
  HEAVY_CLOUD  = 'HC',
  LIGHT_CLOUD  = 'LC',
  THUNDERSTORM = 'T',
  NO_IMAGE     = 'NO_IMAGE'
}

export function loadImage(currentImage: string): string {
  const isStatusImage = currentImage?.toUpperCase().trim()

  switch (isStatusImage?.toUpperCase().trim()) {
    case TWeatherStates.CLEAR:
      return typeWT.Clear;
    case TWeatherStates.SNOW:
      return typeWT.Snow;
    case TWeatherStates.SLEET:
      return typeWT.Sleet;
    case TWeatherStates.SHOWERS:
      return typeWT.Shower;
    case TWeatherStates.HAIL:
      return typeWT.Hail;
    case TWeatherStates.HEAVY_RAIN:
      return typeWT.HeavyRain;
    case TWeatherStates.HEAVY_CLOUD:
      return typeWT.HeavyCloud;
    case TWeatherStates.LIGHT_RAIN:
      return typeWT.LightRain;
    case TWeatherStates.LIGHT_CLOUD:
      return typeWT.LightCloud;
    case TWeatherStates.THUNDERSTORM:
      return typeWT.Thunderstorm;
    default:
      return TWeatherStates.NO_IMAGE;
  }
}
