import React from 'react';
import { UserIcon } from '@heroicons/react/outline';

export const Profile = () => {
  return (
    <button className='border-2 rounded p-1 hover:bg-gray-100'>
      <UserIcon className="h-5 w-5"/>
    </button>
  );
}