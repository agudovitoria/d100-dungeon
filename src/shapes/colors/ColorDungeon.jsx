import React from 'react';
import { Rect } from 'react-konva';


export const ColorDungeon = ({
  fill,
  position
}) => (
  <Rect
    x={position.x}
    y={position.y}
    width={100}
    height={100}
    fill={fill}
    stroke="#000000"
    strokeWidth={0.2}
    shadowBlur={5} />
);
