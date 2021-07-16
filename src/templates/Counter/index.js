import React from 'react';
import { CounterContextProvider } from './CounterContext';
import Home from './Home';
import './style.min.css';

//¡ Aplicação principal
const Counter = () => {
  return (
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  );
};

export default Counter;
