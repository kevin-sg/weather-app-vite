import type { ReactElement } from 'react';

import type { IToggleButtonProps } from '@/models';

function ToggleButton({ text, selected = false, ...props }: IToggleButtonProps): ReactElement {
  const selectedBtn = selected
    ? 'text-slate-200 dark:text-gray-600 bg-blue-700 hover:bg-blue-800 dark:bg-slate-200'
    : 'bg-slate-200 hover:bg-gray-300 dark:bg-gray-600 hover:dark:bg-gray-700';

  return (
    <button
      type="button"
      className={`text-sm font-medium w-8 h-8 flex justify-center items-center ${selectedBtn} rounded-full`}
      {...props}
    >
      {text}
    </button>
  );
}

export default ToggleButton;
