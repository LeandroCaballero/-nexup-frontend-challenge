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

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productsToView.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
