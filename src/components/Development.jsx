import React from 'react';
import { useDispatch } from 'react-redux';
import { addRandom } from '../redux/dungeons/dungeonsSlice';
import { ViewGridAddIcon } from '@heroicons/react/outline';


export const Development = () => {
  const dispatch = useDispatch();

  return (
    <button className='border-2 rounded p-1 hover:bg-gray-100'>
      <ViewGridAddIcon
        className="h-5 w-5"
        onClick={() => dispatch(addRandom())}
      />
    </button>
  );
}