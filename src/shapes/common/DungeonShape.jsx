import React from 'react';
import { Rect } from 'react-konva';


export const DungeonShape = ({
  bordered = false,
  fill,
  height,
  position,
  shadowed = false,
  width
}) => (
  <Rect
    fill={fill}
    height={height}
    listening={false}
    perfectDrawEnabled={false}
    shadowBlur={ shadowed ? 5 : 0}
    stroke="#000000"
    strokeWidth={ bordered ? 0.2 : 0}
    width={width}
    x={position.x}
    y={position.y}
  />
);
