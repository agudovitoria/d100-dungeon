import React from 'react';
import { Rect } from 'react-konva';


export const LeftExitDungeon = ({ position }) => (
  <Rect
    x={position.x}
    y={position.y + 40}
    width={30}
    height={20}
    fill="#FFFFFF" />
);
