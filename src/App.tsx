import React from 'react';
import { AIToolFilterProvider } from './modules/directory/context/AIToolFilterContext';
import { DirectoryPage } from './modules/directory/pages/DirectoryPage';

function App() {
  return (
    <AIToolFilterProvider>
      <DirectoryPage />
    </AIToolFilterProvider>
  );
}

export default App;