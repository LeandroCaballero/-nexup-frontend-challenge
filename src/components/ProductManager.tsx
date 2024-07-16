import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ProductList } from './ProductList';
import { getProductList } from '../api/products';
import { Product } from '../models/Product';
import { FiltersContext } from '../context/FiltersContext';
import { ProductCategory } from '../models/ProductCategory';

export const ProductManager: React.FC = () => {
  const { categorySelected, inputSearch, stockProducts } =
    useContext(FiltersContext);

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

  const productsToView = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        inputSearch === '' ||
        product.name.toLowerCase().includes(inputSearch.toLowerCase());

      const matchesCategory =
        categorySelected === ProductCategory.Todos ||
        product.category === categorySelected;

      const matchesStock = !stockProducts || product.stock;

      return matchesSearch && matchesCategory && matchesStock;
    });
  }, [products, categorySelected, inputSearch, stockProducts]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">Productos</h1>

      <ProductList productList={productsToView} />
    </div>
  );
};
