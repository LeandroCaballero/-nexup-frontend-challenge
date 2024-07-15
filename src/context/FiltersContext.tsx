import React, { ReactNode, createContext, useState, useMemo } from 'react';
import { ProductCategory } from '../models/ProductCategory';

interface Props {
  children?: ReactNode;
}

type FiltersContextType = {
  categorySelected: ProductCategory;
  inputSearch: string;
  setCategorySelected: (categorySelected: ProductCategory) => void;
  setInputSearch: (inputSearch: string) => void;
};

export const FiltersContext = createContext<FiltersContextType>({
  categorySelected: ProductCategory.Todos,
  setCategorySelected: () => {},
  inputSearch: '',
  setInputSearch: () => {},
});

export const FiltersProvider = ({ children }: Props) => {
  const [categorySelected, setCategorySelected] = useState<ProductCategory>(
    ProductCategory.Todos,
  );

  const [inputSearch, setInputSearch] = useState('');

  const contextValue = useMemo(
    () => ({
      categorySelected,
      setCategorySelected,
      inputSearch,
      setInputSearch,
    }),
    [categorySelected, inputSearch],
  );

  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  );
};

FiltersProvider.defaultProps = {
  children: null,
};
