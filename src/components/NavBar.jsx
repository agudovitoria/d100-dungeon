import { HomeIcon, ViewListIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './Menu';
import { Profile } from './Profile';

export const NavBar = () => (
  <div 
    className="border-2 border-zinc-300 flex justify-between p-2 sticky top-0 bg-yellow-500"
    id="navbar"
  >
    <Menu />
    <Link 
      className='border-2 rounded p-1 hover:bg-gray-100'
      to='/'
    >
      <HomeIcon className="h-5 w-5" />
    </Link>
    <Link
      className='border-2 rounded p-1 hover:bg-gray-100'
      to='showcase'
    >
      <ViewListIcon className="h-5 w-5" />
    </Link>
    <Profile />
  </div>
);
