import React from 'react';
import { Rect } from 'react-konva';


export const LeftDoorDungeon = ({ position }) => (
  <Rect
    x={position.x}
    y={position.y + 40}
    width={5}
    height={20}
    fill="#707B7C" />
);
