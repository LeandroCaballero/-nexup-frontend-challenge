import React from 'react';
import './App.css';
import { ProductManager } from './components/ProductManager';
import { CategoryProvider } from './context/CategoryContext';

const App: React.FC = () => {
  return (
    <div className="mt-10">
      <CategoryProvider>
        <ProductManager />
      </CategoryProvider>
    </div>
  );
};

export default App;
