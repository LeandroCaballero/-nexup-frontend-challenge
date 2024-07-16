import React from 'react';
import { Product } from '../models/Product';
import { CategoryFilter } from './filter/CategoryFilter';
import InputSearch from './filter/InputSearch';
import CheckboxStockProducts from './filter/CheckboxStockProducts';

interface ProductListProps {
  productList: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productList,
}) => {
  const productsColor = {
    Active: 'text-green-500',
    Inactive: 'text-red-500',
  };

  return (
    <div className=" w-full md:w-11/12 mx-auto flex flex-col items-center justify-center">
      <div className="shadow-lg shadow-gray-400/90 w-full md:w-2/3 p-2 md:p-5 rounded-xl">
        <div className="flex flex-col md:flex-row items-center md:justify-end my-2 gap-2">
          <CategoryFilter />
          <InputSearch />
          <CheckboxStockProducts />
        </div>
        <div className="overflow-x-scroll md:overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2">Estado</th>
                <th className="p-2">Nombre</th>
                <th className="p-2">Categoría</th>
                <th className="p-2">Precio</th>
                <th className="p-2">Stock</th>
              </tr>
            </thead>
            <tbody>
              {productList.length > 0 ? (
                productList.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className={`${productsColor[product.status]} p-2`}>
                      &#9679;
                    </td>
                    <td className="p-2">{product.name}</td>
                    <td className="p-2">{product.category}</td>
                    <td className="p-2">
                      ${parseFloat(String(product.price)).toFixed(2)}
                    </td>
                    <td className="p-2">{product.stock}</td>
                  </tr>
                ))
              ) : (
                <tr className="border-b">
                  <td className="p-2">Sin productos</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
