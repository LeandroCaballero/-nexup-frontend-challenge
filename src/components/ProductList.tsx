import React, { useContext, useEffect, useState } from 'react';
import { Product } from '../models/Product';
import { CategoryContext } from '../context/CategoryContext';
import { ProductCategory } from '../models/ProductCategory';

interface ProductListProps {
  productList: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productList,
}) => {
  const { categorySelected } = useContext(CategoryContext);

  const [productsToView, setProductsToView] = useState<Product[]>([]);

  useEffect(() => {
    const productsFiltered = productList.filter((product) => {
      if (categorySelected === ProductCategory.Todos) {
        return product;
      }

      return product.category === categorySelected;
    });

    setProductsToView(productsFiltered);
  }, [categorySelected, productList]);

  const productsColor = {
    Active: 'text-green-500',
    Inactive: 'text-red-500',
  };

  return (
    <div className=" w-full md:w-11/12 mx-auto flex flex-col items-center justify-center">
      <div className="shadow-lg shadow-gray-400/90 w-full md:w-2/3 p-5 rounded-xl">
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
            {productsToView.map((product) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
