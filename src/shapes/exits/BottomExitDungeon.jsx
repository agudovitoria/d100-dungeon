import React from 'react';
import { Rect } from 'react-konva';

export const BottomExitDungeon = ({ position }) => (
  <Rect
    x={position.x + 40}
    y={position.y + 70}
    width={20}
    height={30}
    fill="#FFFFFF" />
);
