import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Showcase } from './pages/Showcase';
import { DungeonManager } from './pages/DungeonManager';

export const App = () => (
  <div>
    <NavBar />
    <div className='class="h-64 grid grid-rows-1 grid-flow-row gap-4"'>
      <Routes>
        <Route path='/' element={<DungeonManager />} />
        <Route path='showcase' element={<Showcase />} />
      </Routes>
    </div>
  </div>
);
