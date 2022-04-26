import type { ReactElement } from 'react';
import * as Md from 'react-icons/md';

import { Spinner } from '@/components';
import type { ILocationButtonProps } from '@/models';

function LocationButton(props: ILocationButtonProps): ReactElement {
  const { loading, enabled = false, ...buttonProps } = props;

  return (
    <button
      type="button"
      className="text-sm text-sky-800 dark:text-gray-400 inline-flex gap-2 justify-center items-center cursor-pointer"
      {...buttonProps}
    >
      {loading === 'pending' ? (
        <span className="w-4 h-4">
          <Spinner />
        </span>
      ) : !enabled ? (
        <Md.MdOutlineLocationDisabled />
      ) : (
        <Md.MdMyLocation />
      )}
      Get current location
    </button>
  );
}

export default LocationButton;
