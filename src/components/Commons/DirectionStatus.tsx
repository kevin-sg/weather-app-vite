import type { ReactElement } from 'react';
import * as Fa from 'react-icons/fa';

import { FormatDecimalNumber } from '@/utilities';
import type { IDirectionStatusProps } from '@/models';

function DirectionStatus({ direction, text }: IDirectionStatusProps): ReactElement {
  const directionCompass = FormatDecimalNumber(direction);

  return (
    <div className="flex justify-center items-center gap-2">
      <div className="p-2 bg-gray-600 rounded-full">
        <Fa.FaLocationArrow
          className={`relative text-sm text-gray-200 dark:text-gray-50`}
          style={{ transform: `rotate(${(135 + directionCompass).toString()}deg)` }}
        />
      </div>
      <span className="uppercase">{text}</span>
    </div>
  );
}

export default DirectionStatus;
