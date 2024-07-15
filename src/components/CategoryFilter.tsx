import React, { useContext } from 'react';
import { CategoryContext } from '../context/CategoryContext';
import { ProductCategory } from '../models/ProductCategory';

interface CategoryFilterProps {}

export const CategoryFilter: React.FC<CategoryFilterProps> = () => {
  const { categorySelected, setCategorySelected } = useContext(CategoryContext);

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
      className="px-3 py-1 border rounded-lg mt-3"
    >
      <option value="Todos">Todos</option>
      <option value="Fruit">Fruit</option>
      <option value="Vegetables">Vegetables</option>
      <option value="Meat">Meat</option>
    </select>
  );
};
