import React from 'react';
import useImage from 'use-image';
import { ArrowShape } from '../common/ArrowShape';
import { POSITIONS } from '../dungeons';

export const RightArrow = ({ arrowClicked, id }) => {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
  const [image] = useImage(`data:image/svg+xml;base64, ${window.btoa(svg)}`);

  return (
    <ArrowShape
      image={image}
      name={POSITIONS.RIGHT}
      arrowClicked={arrowClicked}
      x={78}
      y={38}
    />
  );
};