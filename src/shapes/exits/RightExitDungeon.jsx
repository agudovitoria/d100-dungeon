import React from 'react';
import { Rect } from 'react-konva';


export const RightExitDungeon = ({ position }) => (
  <Rect
    x={position.x + 70}
    y={position.y + 40}
    width={30}
    height={20}
    fill="#FFFFFF" />
);
