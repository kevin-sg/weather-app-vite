import { motion, AnimatePresence } from 'framer-motion';
import { connect, ConnectedProps } from 'react-redux';
import type { ReactElement } from 'react';

import { Toast } from '@/components';
import type { RootState } from '@/store';
import { containerVariantsToast } from '@/utilities';

function ContentToast({ isOpen }: ToastProps): ReactElement {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariantsToast}
          initial="hidden"
          animate="visible"
          exit="remove"
          className="w-full fixed bottom-5 z-70 flex justify-center items-center"
        >
          <div className="block w-full">
            <Toast />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const connector = connect((state: RootState) => state.alert);
type ToastProps = ConnectedProps<typeof connector>;

export default connector(ContentToast);
