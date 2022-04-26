import { useContext, useEffect } from 'react';

import * as typeST from '@/store';
import { ToastContext } from '@/contexts';

function useToast() {
  const { toastData, setToastData, resetToast } = useContext(ToastContext);

  const dispatch = typeST.useAppDispatch();

  useEffect(() => {
    if (toastData.type === 'idle') return;
    dispatch(typeST.openToastAction({ ...toastData, isOpen: true }));

    const timerOpenToast = setTimeout(() => {
      dispatch(typeST.closeToastAction());
    }, 2000);

    const timer = setTimeout(() => {
      dispatch(typeST.resetQueryAction());
      dispatch(typeST.resetToastAction());
      resetToast();
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerOpenToast);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastData]);

  return { toast: setToastData };
}

export default useToast;
