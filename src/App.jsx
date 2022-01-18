import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Dungeons } from './pages/Dungeons';
import { Home } from './pages/Home';

export const App = () => (
  <div>
    <NavBar />
    <div className='class="h-64 grid grid-rows-1 grid-flow-row gap-4"'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dungeons' element={<Dungeons />} />
      </Routes>
    </div>
  </div>
);
