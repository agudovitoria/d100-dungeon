import React from 'react';
import useImage from 'use-image';
import { ArrowShape } from '../common/ArrowShape';
import { POSITIONS } from '../dungeons';

export const LeftArrow = ({ arrowClicked, id }) => {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" /></svg>';
  const [image] = useImage(`data:image/svg+xml;base64, ${window.btoa(svg)}`);

  return (
    <ArrowShape
      id={id}
      image={image}
      name={POSITIONS.LEFT}
      arrowClicked={arrowClicked}
      x={0}
      y={38}
    />
  );
};