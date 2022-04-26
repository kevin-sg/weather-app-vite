import { AnimatePresence, motion } from 'framer-motion';
import { connect, ConnectedProps } from 'react-redux';
import type { ReactElement } from 'react';

import type { RootState } from '@/store';
import { CardWeather } from '@/components';
import { containerVariantsCard } from '@/utilities';

function ContentCard({ metric_units, entities }: TCardProps): ReactElement {
  function reduceEntities(data: any[]) {
    return data.map((entity) => entity).slice(1);
  }

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariantsCard}
        initial="hidden"
        animate="show"
        exit="remove"
        className="w-full mx-auto my-5 grid gap-5 grid-cols-2 sm:grid-cols-3 2xl:grid-cols-5 place-items-start"
      >
        {reduceEntities(entities)?.map((el) => (
          <CardWeather key={el.id} {...Object.assign({ metric_units }, el)} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

const connector = connect((state: RootState) => state.searchWeather);
type TCardProps = ConnectedProps<typeof connector>;

export default connector(ContentCard);
