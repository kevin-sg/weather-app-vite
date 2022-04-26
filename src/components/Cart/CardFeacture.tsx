import type { ReactElement } from 'react';
import { motion } from 'framer-motion';

import type { ICardFectureProps } from '@/models';
import { itemVariantsFecture } from '@/utilities';

function CardFecture(fecture: ICardFectureProps): ReactElement {
  const customClass = fecture.className ?? 'bg-white dark:bg-slate-800 shadow-gray-200 dark:shadow-slate-900';
  const customHeight = fecture.heightClass ?? 'h-44';

  return (
    <motion.div
      variants={itemVariantsFecture}
      className={`w-full ${customHeight} ${customClass} px-10 flex justify-evenly flex-col rounded-lg shadow-xl`}
    >
      <h3 className="text-center text-lg font-medium">{fecture.text}</h3>
      <div className="h-14 gap-2 flex justify-center items-center">
        <h2 className="text-6xl font-medium">{fecture.description}</h2>
        <h3 className="text-3xl font-light">{fecture.detail}</h3>
      </div>
      {fecture.children}
    </motion.div>
  );
}

export default CardFecture;
