import React, { ReactNode, createContext, useState, useMemo } from 'react';
import { ProductCategory } from '../models/ProductCategory';

interface Props {
  children?: ReactNode;
}

type FiltersContextType = {
  categorySelected: ProductCategory;
  inputSearch: string;
  stockProducts: boolean;
  setCategorySelected: (categorySelected: ProductCategory) => void;
  setInputSearch: (inputSearch: string) => void;
  setStockProducts: (stockProducts: boolean) => void;
};

export const FiltersContext = createContext<FiltersContextType>({
  categorySelected: ProductCategory.Todos,
  setCategorySelected: () => {},
  inputSearch: '',
  setInputSearch: () => {},
  stockProducts: false,
  setStockProducts: () => {},
});

export const FiltersProvider = ({ children }: Props) => {
  const [categorySelected, setCategorySelected] = useState<ProductCategory>(
    ProductCategory.Todos,
  );

  const [inputSearch, setInputSearch] = useState('');

  const [stockProducts, setStockProducts] = useState(false);

  const contextValue = useMemo(
    () => ({
      categorySelected,
      setCategorySelected,
      inputSearch,
      setInputSearch,
      stockProducts,
      setStockProducts,
    }),
    [categorySelected, inputSearch, stockProducts],
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
