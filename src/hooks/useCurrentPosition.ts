import * as typeST from '@/store';
import { useToast } from '@/hooks';
import { getWeatherLocation } from '@/services';
import { createLocationAdapter } from '@/adapters';
import { getGeolocationCurrentPosition } from '@/utilities';

function useCurrentPosition() {
  const dispatch = typeST.useAppDispatch();

  // Notification
  const { toast } = useToast();

  async function handlePosition() {
    try {
      dispatch(typeST.resetLattlongAction());
      dispatch(typeST.closeToastAction());

      // Get geolocation
      const { latitude, longitude }: any = await getGeolocationCurrentPosition();
      const resultThunk = await dispatch(typeST.getLattlongThunk({ slug1: latitude, slug2: longitude }));

      // Success action
      if (typeST.getLattlongThunk.fulfilled.match(resultThunk)) {
        dispatch(typeST.resetToastAction());
        const { data } = await getWeatherLocation(resultThunk.payload.woeid);
        const locationAdapter = createLocationAdapter(data);
        // Update entities
        const { payload } = dispatch(typeST.updateWeatherStateAction(locationAdapter));
        const { city_name, country_name } = payload[0];

        toast({ type: 'success', message: `Location ${city_name}, ${country_name} obtained` });
      }
    } catch (err: any) {
      toast({ type: 'error', message: err?.message });
      dispatch(typeST.closeToastAction());
      dispatch(typeST.resetToastAction());
    }
  }

  return { handlePosition };
}

export default useCurrentPosition;
