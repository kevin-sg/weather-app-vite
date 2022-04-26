import type { ReactElement } from 'react';
import { motion } from 'framer-motion';

import type { IContainerLayoutProps } from '@/models';
import { containerVariantsLayout } from '@/utilities';

function Layout({ children }: IContainerLayoutProps): ReactElement {
  return (
    <motion.main
      variants={containerVariantsLayout}
      initial="hidden"
      animate="visible"
      className="block w-full overflow-hidden"
    >
      {children}
    </motion.main>
  );
}

export default Layout;
