import React from 'react';
import { Rect } from 'react-konva';

export const BottomDoorDungeon = ({ position }) => (
  <Rect
    x={position.x + 40}
    y={position.y + 70}
    width={20}
    height={5}
    fill="##707B7C"
  />
);
