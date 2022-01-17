import React from 'react';
import { Rect } from 'react-konva';


export const RightDoorDungeon = ({ position }) => (
  <Rect
    x={position.x + 95}
    y={position.y + 40}
    width={5}
    height={20}
    fill="#707B7C" />
);
