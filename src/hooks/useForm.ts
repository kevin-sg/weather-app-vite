import { useState, ChangeEvent, FormEvent } from 'react';

import * as typeST from '@/store';
import { useToast } from '@/hooks';
import type { InitialCustomFormState, useFormCustomHook } from '@/models';

function useForm(initialState: InitialCustomFormState): useFormCustomHook {
  const [formData, setFormData] = useState(initialState);
  const dispatch = typeST.useAppDispatch();

  // toast
  const { toast } = useToast();

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setFormData((el) => ({ ...el, [target.name]: target.value }));
  }

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    if (formData.search.length < 4) {
      toast({ type: 'error', message: 'Minimum of 4 characters' });
      dispatch(typeST.closeToastAction());
      dispatch(typeST.resetToastAction());
      return;
    }

    const resultAction = await dispatch(typeST.getQueryThunk({ slug: formData.search.toLowerCase().trim() }));
    if (!typeST.getQueryThunk.fulfilled.match(resultAction)) {
      dispatch(typeST.closeToastAction());
      dispatch(typeST.resetQueryAction());
      toast({ type: 'error', message: 'Try another city' });
      dispatch(typeST.resetToastAction());
    }

    resetForm();
  }

  function resetForm(): void {
    setFormData({ ...initialState });
  }

  return { formData, handleChange, handleSubmit };
}

export default useForm;
