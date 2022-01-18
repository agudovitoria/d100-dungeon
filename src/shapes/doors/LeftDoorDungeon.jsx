import React from 'react';
import { DungeonShape } from '../common/DungeonShape';


export const LeftDoorDungeon = ({ position }) => (
  <DungeonShape
    fill="#707B7C"
    height={20}
    position={{
      x: position.x,
      y: position.y + 40
    }}
    width={5}
  />
);
