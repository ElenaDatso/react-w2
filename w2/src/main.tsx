import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CardsContext from './context/cardsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CardsContext.Provider value={[]}>
      <App />
    </CardsContext.Provider>
  </React.StrictMode>
);
