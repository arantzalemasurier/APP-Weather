import React, { useRef } from 'react';
import { Formik } from 'formik';
import SearchContainer from './SearchContainer';
import SearchInput from './SearchInput';


interface Props {
    value: string;
    showResult: boolean;
    change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    submit: (value: string) => void;
}

const Search: React.FC<Props> = ({ submit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

    return (
      <Formik
        initialValues={{
          searchInput: ''
        }}
        onSubmit={(values, { setSubmitting }) => {
          submit(values.searchInput);
          inputRef.current?.blur();
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleSubmit }: { values: { searchInput: string }, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void, isSubmitting: boolean }) => (
          <SearchContainer onSubmit={handleSubmit}>
            <SearchInput
              type="text"
              name="searchInput"
              value={values.searchInput}
              onChange={handleChange}
              placeholder="Ejemplo: Madrid, España"
              ref={inputRef}
            />
          </SearchContainer>
        )}
      </Formik>
    );
  };
  
  export default Search;