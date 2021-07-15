import React from 'react';
import { CounterContextProvider } from './CounterContext';
import Home from './Home';

//¡ Aplicação principal 
const Counter = () => {
  return (
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  );
};

export default Counter;
