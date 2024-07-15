import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';
import { ProductStatus } from '../models/ProductStatus';

// Change the return type if necessary
export const getProductList = (): Product[] => {
  const randomData = [
    {
      id: 1,
      name: 'Manzana',
      status: ProductStatus.Active,
      category: ProductCategory.Fruit,
      price: 2.5,
    },
    {
      id: 2,
      name: 'Banana',
      status: ProductStatus.Active,
      category: ProductCategory.Fruit,
      price: 1.75,
    },
    {
      id: 3,
      name: 'Zanahoria',
      status: ProductStatus.Active,
      category: ProductCategory.Vegetables,
      price: 3.0,
    },
    {
      id: 4,
      name: 'Lechuga',
      status: ProductStatus.Active,
      category: ProductCategory.Vegetables,
      price: 1.99,
    },
    {
      id: 5,
      name: 'Filete de Ternera',
      status: ProductStatus.Inactive,
      category: ProductCategory.Meat,
      price: 12.5,
    },
    {
      id: 6,
      name: 'Pechuga de Pollo',
      status: ProductStatus.Active,
      category: ProductCategory.Meat,
      price: 9.99,
    },
    {
      id: 7,
      name: 'Pescado',
      status: ProductStatus.Inactive,
      category: ProductCategory.Meat,
      price: 2.0,
    },
    {
      id: 8,
      name: 'Pato',
      status: ProductStatus.Active,
      category: ProductCategory.Meat,
      price: 1.5,
    },
    {
      id: 9,
      name: 'Zapallo',
      status: ProductStatus.Active,
      category: ProductCategory.Vegetables,
      price: 3.75,
    },
    {
      id: 10,
      name: 'Remolacha',
      status: ProductStatus.Inactive,
      category: ProductCategory.Vegetables,
      price: 2.25,
    },
    {
      id: 11,
      name: 'Limon',
      status: ProductStatus.Active,
      category: ProductCategory.Fruit,
      price: 1.99,
    },
    {
      id: 12,
      name: 'Tomate',
      status: ProductStatus.Active,
      category: ProductCategory.Vegetables,
      price: 2.25,
    },
    {
      id: 13,
      name: 'Pera',
      status: ProductStatus.Inactive,
      category: ProductCategory.Fruit,
      price: 3.5,
    },
    {
      id: 14,
      name: 'Cebolla',
      status: ProductStatus.Inactive,
      category: ProductCategory.Vegetables,
      price: 1.0,
    },
    {
      id: 15,
      name: 'Salmón Ahumado',
      status: ProductStatus.Inactive,
      category: ProductCategory.Meat,
      price: 15.99,
    },
    {
      id: 16,
      name: 'Aguacate',
      status: ProductStatus.Active,
      category: ProductCategory.Fruit,
      price: 2.99,
    },
    {
      id: 17,
      name: 'Frutilla',
      status: ProductStatus.Inactive,
      category: ProductCategory.Fruit,
      price: 3.49,
    },
    {
      id: 18,
      name: 'Naranja',
      status: ProductStatus.Active,
      category: ProductCategory.Fruit,
      price: 1.75,
    },
    {
      id: 19,
      name: 'Patata',
      status: ProductStatus.Active,
      category: ProductCategory.Vegetables,
      price: 1.25,
    },
    {
      id: 20,
      name: 'Costillas de Cerdo',
      status: ProductStatus.Inactive,
      category: ProductCategory.Meat,
      price: 10.75,
    },
  ];

  return randomData;
};
