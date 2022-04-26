import type { ReactElement } from 'react';
import * as Fa from 'react-icons/fa';

import { useTheme } from '@/hooks';

function ThemeButton(): ReactElement {
  const { theme, setTheme } = useTheme();

  return (
    <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="m-2 p-2">
      {theme === 'dark' ? (
        <Fa.FaSun className="text-xl dark:text-yellow-400 text-white" />
      ) : (
        <Fa.FaMoon className="text-xl text-gray-800 dark:text-white" />
      )}
    </button>
  );
}

export default ThemeButton;
