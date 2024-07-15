import React, { useContext, useEffect, useState } from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import { getProductList } from '../api/products';
import { Product } from '../models/Product';
import { FiltersContext } from '../context/FiltersContext';
import { ProductCategory } from '../models/ProductCategory';

export const ProductManager: React.FC = () => {
  const { categorySelected, inputSearch } = useContext(FiltersContext);

  const [products, setProducts] = useState<Product[]>([]);
  const [productsToView, setProductsToView] = useState<Product[]>([]);

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

  useEffect(() => {
    const productsFiltered = products.filter((product) => {
      if (inputSearch !== '') {
        return product.name.toLowerCase().includes(inputSearch.toLowerCase());
      }

      if (categorySelected === ProductCategory.Todos) {
        return product;
      }

      return product.category === categorySelected;
    });

    setProductsToView(productsFiltered);
  }, [categorySelected, inputSearch, products]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">Productos</h1>
      <CategoryFilter />
      <ProductList productList={productsToView} />
    </div>
  );
};
