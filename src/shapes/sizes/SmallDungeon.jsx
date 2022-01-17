import React from 'react';
import { Rect } from 'react-konva';


export const SmallDungeon = ({ position }) => (
  <Rect
    x={position.x + 30}
    y={position.y + 30}
    width={40}
    height={40}
    fill="#FFFFFF"
  />
);
