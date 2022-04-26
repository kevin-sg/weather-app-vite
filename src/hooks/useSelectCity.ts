import * as typeST from '@/store';
import { useToast } from '@/hooks';
import { getWeatherLocation } from '@/services';
import { createLocationAdapter } from '@/adapters';

function useSelectCity() {
  const dispatch = typeST.useAppDispatch();

  const { toast } = useToast();

  async function onClickQuery(slug: number): Promise<void> {
    try {
      // Close toast
      dispatch(typeST.closeToastAction());
      // Reset Lattitude Longitude
      dispatch(typeST.resetLattlongAction());

      const { data } = await getWeatherLocation(slug);
      const respAdapter = createLocationAdapter(data);

      const resultAction = dispatch(typeST.updateWeatherStateAction(respAdapter));
      if (resultAction.payload) {
        toast({ type: 'success', message: `City of ${resultAction.payload[0].city_name} applied` });
      }
    } catch (err) {
      toast({ type: 'error', message: `Oops something went wrong` });
    }
  }

  return { onClickQuery };
}

export default useSelectCity;
