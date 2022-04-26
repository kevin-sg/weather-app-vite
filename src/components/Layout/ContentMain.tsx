import type { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import type { ReactElement } from 'react';

import { RootState, updateMetricUnitsAction } from '@/store';
import { Footer, ContentFecture, ContentCard, ToggleButton } from '@/components';

function ContentMain({ metric_units, updateMetricFn }: TMainProps): ReactElement {
  return (
    <div className="block h-full ml-0 lg:ml-100 xl:ml-113.5">
      <div className="block h-full py-5">
        <div className="grid gap-5 place-content-center py-2 md:p-5 lg:my-0">
          <div className="w-full flex gap-2 justify-end items-center">
            <ToggleButton
              text="°C"
              disabled={metric_units.c}
              selected={metric_units.c}
              onClick={() => updateMetricFn({ c: true, f: false })}
            />
            <ToggleButton
              text="°F"
              disabled={metric_units.f}
              selected={metric_units.f}
              onClick={() => updateMetricFn({ c: false, f: true })}
            />
          </div>

          <ContentCard />
          <ContentFecture />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    updateMetricFn: (units: { c: boolean; f: boolean }) => dispatch(updateMetricUnitsAction(units)),
    dispatch
  };
}

const connector = connect((state: RootState) => state.searchWeather, mapDispatchToProps);
type TMainProps = ConnectedProps<typeof connector>;

export default connector(ContentMain);
