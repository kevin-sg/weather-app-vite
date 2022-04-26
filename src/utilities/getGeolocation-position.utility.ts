import type { TGeoCoordsSuccess, TGeoSuccess, TGeoError } from '@/models';

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
};

function successfulLookup({ coords: { latitude, longitude } }: TGeoCoordsSuccess) {
  return { latitude, longitude };
}

function getPositionPromise(): Promise<any> {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej, options);
  });
}

export async function getGeolocationCurrentPosition(): Promise<TGeoSuccess | TGeoError> {
  try {
    const resp = await getPositionPromise(); // wait for getPosition to complete
    return successfulLookup(resp);
  } catch (err: any) {
    throw err;
    // { code: err.code, message: err.message };
  }
}
