import React from 'react';
import { Rect } from 'react-konva';

export const TopExitDungeon = ({ position }) => (
  <Rect
    x={position.x + 40}
    y={position.y}
    width={20}
    height={30}
    fill="#FFFFFF"
  />
);
