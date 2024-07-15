import React from 'react';
import './App.css';
import { ProductManager } from './components/ProductManager';
import { CategoryProvider } from './context/CategoryContext';

const App: React.FC = () => {
  return (
    <div className="NexupFrontendChallenge">
      <CategoryProvider>
        <h1 className="text-red-500">Nexup Frontend Challenge</h1>
        <ProductManager />
      </CategoryProvider>
    </div>
  );
};

export default App;
