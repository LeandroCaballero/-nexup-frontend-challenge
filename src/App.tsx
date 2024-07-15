import React from 'react';
import './App.css';
import { ProductManager } from './components/ProductManager';
import { FiltersProvider } from './context/FiltersContext';

const App: React.FC = () => {
  return (
    <div className="mt-10">
      <FiltersProvider>
        <ProductManager />
      </FiltersProvider>
    </div>
  );
};

export default App;
