import React from 'react';
import './App.css';
import { D100Stage } from './components/D100Stage';

export const App = () => (
  <div className='class="h-64 grid grid-rows-1 grid-flow-col gap-4"'>
    <D100Stage /> 
  </div>
);
