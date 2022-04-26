import type { ReactElement } from 'react';

import type { ISearchButtonProps } from '@/models';

function SearchButton(props: ISearchButtonProps): ReactElement {
  const { type = 'button', text, loading = 'idle', ...buttonProps } = props;

  return (
    <button
      type={type}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      {...buttonProps}
    >
      {loading === 'pending' && <span>Loading...</span>}
      {(loading === 'idle' || loading === 'success') && text}
    </button>
  );
}

export default SearchButton;
