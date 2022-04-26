import { motion, AnimatePresence } from 'framer-motion';
import { connect, ConnectedProps } from 'react-redux';
import type { ReactElement } from 'react';
import * as Ai from 'react-icons/ai';

import type { RootState } from '@/store';
import { Form, ItemsButton } from '@/components';
import { containerVariantsSbrDropdown, itemVariantsButton } from '@/utilities';

interface ISidebarDropdownProps extends TSidebarProps {
  setIsOpen?: any;
}

function SidebarDropdown(props: ISidebarDropdownProps): ReactElement {
  const { setIsOpen: setOpenSidebar, queryWeather } = props;
  const { search_entities, loading } = queryWeather;

  function handleClick() {
    document.querySelector('body')?.classList.remove('no-scrollbar');
    setOpenSidebar((value: boolean) => !value);
  }

  return (
    <motion.div
      variants={containerVariantsSbrDropdown}
      initial="hidden"
      animate="visible"
      exit="remove"
      className={`fixed w-full top-0 left-0 z-50 h-screen lg:w-100 bg-green-100`}
    >
      <aside
        className="h-screen lg:absolute lg:inset-y-0 md:left-0 lg:w-100 xl:w-113.5 bg-slate-100 dark:bg-gray-800 z-50"
        aria-label="Sidebar"
      >
        <div className="w-4/5 lg:w-full h-full mx-auto flex justify-start items-center flex-col p-10">
          <div className="w-full my-5 flex justify-end items-center">
            <Ai.AiOutlineClose
              onClick={handleClick}
              className="text-xl text-sky-800 dark:text-white rounded-full cursor-pointer"
            />
          </div>
          <div className="mb-2">
            <Form />

            <AnimatePresence>
              {Object.values(search_entities).length ? (
                <motion.div>
                  <h2 className="text-2xl text-center">Select City</h2>
                  <motion.div variants={itemVariantsButton} initial="hidden" animate="visible" exit="end">
                    <ItemsButton
                      entities={search_entities}
                      disabled={loading === 'idle'}
                      setIsOpen={setOpenSidebar}
                    />
                  </motion.div>
                </motion.div>
              ) : (
                <h2 className="text-2xl text-center text-sky-800 dark:text-gray-300">Search city</h2>
              )}
            </AnimatePresence>
          </div>
        </div>
      </aside>
    </motion.div>
  );
}

const connector = connect((state: RootState) => state);
type TSidebarProps = ConnectedProps<typeof connector>;

export default connector(SidebarDropdown);
