import React from 'react';
import { Product } from '../models/Product';
import InputSearch from './InputSearch';

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
        <div className="flex justify-center md:justify-end">
          <InputSearch />
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Estado</th>
              <th className="p-2">Nombre</th>
              <th className="p-2">Categoría</th>
              <th className="p-2">Precio</th>
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
  );
};
