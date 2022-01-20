import React from 'react';
import useImage from 'use-image';
import { ArrowShape } from '../common/ArrowShape';
import { POSITIONS } from '../dungeons';

export const TopArrow = ({ arrowClicked, id }) => {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" /></svg>';
  const [image] = useImage(`data:image/svg+xml;base64, ${window.btoa(svg)}`);

  return (
    <ArrowShape
      id={id}
      image={image}
      name={POSITIONS.TOP}
      arrowClicked={arrowClicked}
      x={38}
      y={0}
    />
  );
};