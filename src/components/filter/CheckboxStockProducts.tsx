import React, { useContext } from 'react';
import { FiltersContext } from '../../context/FiltersContext';

const CheckboxStockProducts = () => {
  const { setStockProducts } = useContext(FiltersContext);

  const handleSearch = (checked: boolean) => {
    setStockProducts(checked);
  };

  return (
    <div className="flex items-center justify-center gap-x-2 p-2">
      <label htmlFor="stockProducts" className="cursor-pointer">
        Productos en stock
      </label>
      <input
        id="stockProducts"
        type="checkbox"
        onChange={(e) => handleSearch(e.target.checked)}
        className="h-4 w-4 text-blue-500 border-blue-500 rounded-full transition-transform duration-300 ease-in-out transform checked:scale-110 cursor-pointer"
      />
    </div>
  );
};

export default CheckboxStockProducts;
