import React, { useContext } from 'react';
import { FiltersContext } from '../context/FiltersContext';

const InputSearch = () => {
  const { setInputSearch } = useContext(FiltersContext);

  const handleSearch = (search: string) => {
    setInputSearch(search);
  };

  return (
    <input
      type="text"
      placeholder="Buscar"
      className="w-fit rounded-lg px-2 py-1 border mb-2 focus:outline-none transition-colors duration-200 ease-out focus:border-blue-500"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default InputSearch;
