import React from 'react';
import { Rect } from 'react-konva';

export const TopExitDungeon = ({ position }) => (
  <Rect
    fill="#FFFFFF"
    height={30}
    listening={false}
    perfectDrawEnabled={false}
    width={20}
    x={position.x + 40}
    y={position.y}
  />
);
