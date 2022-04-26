import { connect, ConnectedProps } from 'react-redux';
import type { ReactElement } from 'react';

import { useForm } from '@/hooks';
import type { RootState } from '@/store';
import { Input, SearchButton } from '@/components';

function Form({ loading }: IFormProps): ReactElement {
  const initialState = { search: '' };
  const { formData, handleChange, handleSubmit } = useForm(initialState);

  return (
    <form onSubmit={handleSubmit} className="w-full mb-5 flex gap-5 justify-center items-center" noValidate>
      <Input
        type="text"
        name="search"
        value={formData.search}
        disabled={loading === 'pending'}
        placeholder="Search location"
        onChange={handleChange}
      />
      <SearchButton type="submit" text="Search" disabled={loading === 'pending'} loading={loading} />
    </form>
  );
}

const connector = connect((state: RootState) => state.queryWeather);
type IFormProps = ConnectedProps<typeof connector>;

export default connector(Form);
