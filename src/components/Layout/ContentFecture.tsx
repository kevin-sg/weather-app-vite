import { connect, ConnectedProps } from 'react-redux';
import type { ReactElement } from 'react';
import { motion } from 'framer-motion';

import type { RootState } from '@/store';
import { CardFeacture, DirectionStatus, ProgressBar } from '@/components';
import { FormartToKilometer, containerVariantsFecture } from '@/utilities';

function ContentFecture(entity: TFectureProps): ReactElement {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-medium mb-5">Today's Highlights</h2>

      <motion.div
        variants={containerVariantsFecture}
        initial="hidden"
        animate="show"
        className="w-full mx-auto grid gap-5 xl:gap-10 grid-cols-1 md:grid-cols-2 place-items-center"
      >
        <CardFeacture
          text="Wind Status"
          description={FormartToKilometer(entity.wind_speed, true)}
          detail="km/h"
          heightClass="h-52"
          className="text-gray-200 bg-gray-800 dark:bg-slate-800 shadow-gray-300 dark:shadow-slate-900"
        >
          <DirectionStatus direction={entity.wind_direction} text={entity.wind_direction_compass} />
        </CardFeacture>

        <CardFeacture text="Humidity" description={entity.humidity} detail="%" heightClass="h-52">
          <ProgressBar progress={entity.humidity} />
        </CardFeacture>

        <CardFeacture
          text="Visibility"
          description={FormartToKilometer(entity.visibility)}
          detail="km"
          className="bg-lime-300 dark:bg-slate-800 shadow-lime-200 dark:shadow-slate-900"
        />

        <CardFeacture
          text="Air Pressure"
          description={entity.air_pressure}
          detail="mb"
          className="bg-orange-300 dark:bg-slate-800 shadow-orange-200 dark:shadow-slate-900"
        />
      </motion.div>
    </div>
  );
}

const connector = connect((state: RootState) => state.searchWeather.entities[0]);
type TFectureProps = ConnectedProps<typeof connector>;

export default connector(ContentFecture);
