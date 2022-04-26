import type { ReactElement } from 'react';
import { motion } from 'framer-motion';
import * as Bs from 'react-icons/bs';

import type { ICardWeatherProps } from '@/models';
import { FormatDateMMMD, loadImage, FormatMetricConvert, itemVariantsCard } from '@/utilities';

function CardWeather(entity: ICardWeatherProps): ReactElement {
  const currentImage = loadImage(entity.state_abbr);

  return (
    <motion.div
      variants={itemVariantsCard}
      className="w-40 md:w-44 h-52 px-6 flex justify-evenly flex-col bg-blue-300/50 dark:bg-slate-800 rounded-lg shadow-gray-100 shadow-xl dark:shadow-slate-900"
    >
      <h3 className="text-center text-lg font-medium capitalize">{FormatDateMMMD(entity.date)}</h3>
      <div className="w-28 h-28 overflow-hidden">
        {currentImage === 'no_image' ? (
          <Bs.BsCardImage className="bg-none w-full h-full" />
        ) : (
          <img src={currentImage} alt="image_url" className="object-cover object-center" />
        )}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium">
          {FormatMetricConvert(entity.max_temp, entity.metric_units.c)} {entity.metric_units.c ? '°C' : '°F'}
        </span>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-100/60">
          {FormatMetricConvert(entity.min_temp, entity.metric_units.c)} {entity.metric_units.c ? '°C' : '°F'}
        </span>
      </div>
    </motion.div>
  );
}

export default CardWeather;
