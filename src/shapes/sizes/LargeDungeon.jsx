import React from 'react';
import { DungeonShape } from '../common/DungeonShape';


export const LargeDungeon = ({ position }) => (
  <DungeonShape
    fill="#FFFFFF"
    height={80}
    position={{
      x: position.x + 10,
      y: position.y + 10
    }}
    width={80}
  />
);
