import { MenuIcon } from '@heroicons/react/outline';
import React from 'react';

export const Menu = () => {
  return (
    <button className='border-2 rounded p-1 hover:bg-gray-100'>
      <MenuIcon className="h-5 w-5" />
    </button>
  );
}