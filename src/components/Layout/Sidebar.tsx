import { connect, ConnectedProps } from 'react-redux';
import { ReactElement, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as Hi from 'react-icons/hi';
import * as Bs from 'react-icons/bs';

import type { RootState } from '@/store';
import { CloudBackground } from '@/assets';
import { useCurrentPosition } from '@/hooks';
import { FormatDateMMMD, loadImage, FormatMetricConvert } from '@/utilities';
import { ThemeButton, SearchButton, LocationButton, SidebarDropdown } from '@/components';

function Sidebar({ searchWeather, geolocationWeather }: TSidebarProps): ReactElement {
  // State
  const { enabled, loading } = geolocationWeather;
  const { entities: [entity], metric_units } = searchWeather;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentImage = loadImage(entity.state_abbr);

  // custom hook
  const { handlePosition } = useCurrentPosition();

  function handleClick(): void {
    document.querySelector('body')?.classList.add('no-scrollbar');
    setIsOpen((value: boolean) => !value);
  }

  return (
    <>
      <aside className="block w-full lg:fixed lg:inset-y-0 md:left-0 lg:w-100 xl:w-113.5 h-screen bg-sky-200 dark:bg-slate-800 shadow-sky-200/50 dark:shadow-gray-900/80 shadow-lg lg:z-20">
        <div className="relative w-full h-full flex justify-between items-center flex-col py-10">
          <div className="relative w-3/4 flex gap-2 items-center flex-col z-20">
            <div className="absolute inset-y-0 right-0 z-40">
              <ThemeButton />
            </div>

            <SearchButton text="Search for places" onClick={handleClick} />
            <LocationButton
              onClick={handlePosition}
              loading={loading}
              enabled={enabled}
              disabled={loading === 'pending'}
            />
          </div>

          <div className="w-full absolute inset-0 z-10 flex justify-center items-center overflow-hidden">
            <img
              src={CloudBackground}
              alt="Cloud"
              className="object-cover object-center opacity-60 dark:opacity-10"
            />
          </div>

          <div className="w-25 h-25 bg-transparent dark:bg-none">
            {currentImage === 'no_image' ? (
              <Bs.BsCardImage className="text-6xl bg-none" />
            ) : (
              <img src={currentImage} alt={entity.state_abbr} className="object-cover object-center" />
            )}
          </div>

          <div className="flex justify-center items-center text-sky-800 dark:text-gray-200">
            <h2 className="text-8xl text-center font-normal">
              {FormatMetricConvert(entity.current_temp, metric_units.c)}
            </h2>
            <span className="text-6xl font-light">{metric_units.c ? '°C' : '°F'}</span>
          </div>

          <span className="text-3xl text-center text-sky-800 dark:text-gray-300">{entity.state_name}</span>

          <div className="flex gap-2 flex-col justify-center">
            <span className="text-lg text-center text-sky-800 dark:text-gray-400 mb-5 capitalize">
              Today · {FormatDateMMMD(entity.date)}
            </span>

            <div className="flex gap-2 justify-center items-center">
              <Hi.HiLocationMarker className="text-xl dark:text-gray-400" />
              <span className="text-xl font-medium text-sky-800 dark:text-gray-300">{entity.city_name},</span>
              <span className="text-lg font-normal text-sky-800 dark:text-gray-300">
                {entity.country_name}
              </span>
            </div>
          </div>
        </div>
      </aside>

      <AnimatePresence>{isOpen && <SidebarDropdown setIsOpen={setIsOpen} />}</AnimatePresence>
    </>
  );
}

const connector = connect((state: RootState) => state);
type TSidebarProps = ConnectedProps<typeof connector>;

export default connector(Sidebar);
