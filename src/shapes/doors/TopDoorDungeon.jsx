import React from 'react';
import { DungeonShape } from '../common/DungeonShape';

export const TopDoorDungeon = ({ position }) => (
  <DungeonShape
    fill="#707B7C"
    height={5}
    position={{
      x: position.x + 40,
      y: position.y
    }}
    width={20}
  />
);
