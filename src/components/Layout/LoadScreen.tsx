import type { ReactElement } from 'react';

import { SpinkerCube } from '@/components';
import { Partly_cloudy_rain } from '@/assets';

function LoadScreen(): ReactElement {
  return (
    <div className="absolute inset-0 h-3/4 flex justify-center items-center flex-col">
      <div className="w-72">
        <img src={Partly_cloudy_rain} className="object-cover object-center" alt="Partly cloudy rain" />
      </div>
      <div className="relative w-14 h-14">
        <SpinkerCube />
      </div>
    </div>
  );
}

export default LoadScreen;
