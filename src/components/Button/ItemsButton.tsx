import type { ReactElement } from 'react';
import * as Io from 'react-icons/io';
import * as Hi from 'react-icons/hi';

import { useSelectCity } from '@/hooks';
import type { ItemsButtonProps } from '@/models';

function ItemsButton({ entities, setIsOpen: SetOpenSidebar, ...props }: ItemsButtonProps): ReactElement {
  const { onClickQuery } = useSelectCity();

  function handleClick() {
    onClickQuery(entities.woeid);
    SetOpenSidebar((value: boolean) => !value);
    document.querySelector('body')?.classList.remove('no-scrollbar');
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="my-4 mx-auto flex gap-2 justify-center items-center w-full p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      {...props}
    >
      <Hi.HiLocationMarker className="text-xl text-sky-800" />
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 justify-center items-center">
          <p className="text-xl font-medium text-sky-800 dark:text-gray-400">{entities.name_city}</p>
          <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
            {entities.location}
          </span>
        </div>

        <div className="w-5">
          <Io.IoIosArrowForward className="text-lg" />
        </div>
      </div>
    </button>
  );
}

export default ItemsButton;
