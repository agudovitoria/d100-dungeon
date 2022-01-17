import React from 'react';
import { Rect } from 'react-konva';


export const LargeDungeon = ({ position }) => (
  <Rect
    x={position.x + 10}
    y={position.y + 10}
    width={80}
    height={80}
    fill="#FFFFFF"
  />
);
