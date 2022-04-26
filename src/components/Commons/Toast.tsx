import type { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import type { ReactElement } from 'react';
import * as Fa from 'react-icons/fa';

import { closeToastAction, resetToastAction, RootState } from '@/store';

function Toast({ type, message, isOpen, closeToastFn, resetToastFn }: ToastProps): ReactElement {
  function handleClick() {
    // Close toast
    closeToastFn();
    // Reset type & message
    setTimeout(() => {
      resetToastFn();
    }, 2000);
  }

  const customColors =
    type === 'success'
      ? 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200'
      : type === 'error'
      ? 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200'
      : 'hidden';

  const customBorder =
    type === 'success'
      ? 'border-green-500 dark:border-green-800'
      : type === 'error'
      ? 'border-red-500 dark:border-red-800'
      : 'border-inherit';

  return (
    <div
      id={`toast-${type}`}
      className={`w-4/5 max-w-max mx-auto flex items-center p-4 mb-4 text-gray-500 bg-white rounded-lg border ${customBorder} shadow-lg dark:text-gray-400 dark:bg-gray-800`}
      role="alert"
    >
      <div
        className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${customColors} rounded-lg`}
      >
        {isOpen && type === 'success' && <Fa.FaCheck className="w-5 h-5" />}
        {isOpen && type === 'error' && <Fa.FaTimes className="w-5 h-5" />}
      </div>
      <div className="mx-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        onClick={handleClick}
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <Fa.FaTimes className="w-5 h-5" />
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    closeToastFn: () => dispatch(closeToastAction()),
    resetToastFn: () => dispatch(resetToastAction()),
    dispatch
  };
}

const connector = connect((state: RootState) => state.alert, mapDispatchToProps);
type ToastProps = ConnectedProps<typeof connector>;

export default connector(Toast);
