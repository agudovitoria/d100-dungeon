import React from 'react';
import { Rect } from 'react-konva';

export const TopDoorDungeon = ({ position }) => (
  <Rect
    x={position.x + 40}
    y={position.y}
    width={20}
    height={5}
    fill="#707B7C"
  />
);
