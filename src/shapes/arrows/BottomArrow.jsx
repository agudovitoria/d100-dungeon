import React from 'react';
import useImage from 'use-image';
import { ArrowShape } from '../common/ArrowShape';
import { POSITIONS } from '../dungeons';

export const BottomArrow = ({ arrowClicked, id }) => {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" /></svg>';
  const [image] = useImage(`data:image/svg+xml;base64, ${window.btoa(svg)}`);

  return (
    <ArrowShape
      id={id}
      image={image}
      name={POSITIONS.BOTTOM}
      arrowClicked={arrowClicked}
      x={38}
      y={80}
    />
  );
};