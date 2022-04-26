import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { ReactElement, useEffect } from 'react';

import { useToast } from '@/hooks';
import { RootState, getLocationThunk } from '@/store';
import { Layout, ContentMain, Sidebar, LoadScreen } from '@/components';

function HomePage({ loading, getLocationFn }: THomeProps): ReactElement {
  const { toast } = useToast();

  // default woeid: London = 44418
  async function getGeolocation() {
    const resultAction = await getLocationFn(44418);
    if (getLocationThunk.fulfilled.match(resultAction)) {
      const { city_name, country_name } = resultAction.payload[0];
      toast({ type: 'success', message: `Default location ${city_name}, ${country_name} obtained` });
    } else {
      toast({ type: 'error', message: 'oops something went wrong' });
    }
  }

  useEffect(() => {
    getGeolocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading === 'pending' && <LoadScreen />}
      {loading === 'success' && (
        <Layout>
          <Sidebar />
          <ContentMain />
        </Layout>
      )}
    </>
  );
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, AnyAction>) {
  return {
    getLocationFn: (slug: number) => dispatch(getLocationThunk({ slug })),
    dispatch
  };
}

const connector = connect((state: RootState) => state.searchWeather, mapDispatchToProps);
type THomeProps = ConnectedProps<typeof connector>;

export default connector(HomePage);
