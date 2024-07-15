import React, { ReactNode, createContext, useState, useMemo } from 'react';
import { ProductCategory } from '../models/ProductCategory';

interface Props {
  children?: ReactNode;
}

type CategoryContextType = {
  categorySelected: ProductCategory;
  setCategorySelected: (categorySelected: ProductCategory) => void;
};

export const CategoryContext = createContext<CategoryContextType>({
  categorySelected: ProductCategory.Todos,
  setCategorySelected: () => {},
});

export const CategoryProvider = ({ children }: Props) => {
  const [categorySelected, setCategorySelected] = useState<ProductCategory>(
    ProductCategory.Todos,
  );

  const contextValue = useMemo(
    () => ({
      categorySelected,
      setCategorySelected,
    }),
    [categorySelected, setCategorySelected],
  );

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};

CategoryProvider.defaultProps = {
  children: null,
};
