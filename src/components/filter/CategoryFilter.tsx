import React, { useContext } from 'react';
import { FiltersContext } from '../../context/FiltersContext';
import { ProductCategory } from '../../models/ProductCategory';

interface CategoryFilterProps {}

export const CategoryFilter: React.FC<CategoryFilterProps> = () => {
  const { categorySelected, setCategorySelected } = useContext(FiltersContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (setCategorySelected) {
      setCategorySelected(e.target.value as ProductCategory);
    }
  };

  return (
    <select
      name=""
      id=""
      value={categorySelected}
      onChange={(e) => handleChange(e)}
      className="px-3 py-1 border rounded-lg w-1/2 md:w-fit"
    >
      <option value="Todos">Todos</option>
      <option value="Fruit">Fruit</option>
      <option value="Vegetables">Vegetables</option>
      <option value="Meat">Meat</option>
    </select>
  );
};
