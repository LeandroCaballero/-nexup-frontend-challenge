import React, { useEffect, useState } from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import { getProductList } from '../api/products';
import { Product } from '../models/Product';

export const ProductManager: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const productList = getProductList();
      setProducts(productList);
    } catch (error) {
      // Hacer algo con el error, toast por ejemplo
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }, []);

  return (
    <div>
      <CategoryFilter />
      <ProductList productList={products} />
    </div>
  );
};
