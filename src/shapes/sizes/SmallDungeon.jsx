import React from 'react';
import { DungeonShape } from '../common/DungeonShape';


export const SmallDungeon = ({ position }) => (
  <DungeonShape
    fill="#FFFFFF"
    height={40}
    position={{
      x: position.x + 30,
      y: position.y + 30
    }}
    width={40}
  />
);
