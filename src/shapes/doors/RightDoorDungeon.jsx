import React from 'react';
import { DungeonShape } from '../common/DungeonShape';


export const RightDoorDungeon = ({ position }) => (
  <DungeonShape
    fill="#707B7C"
    height={20}
    position={{
      x: position.x + 95,
      y: position.y + 40
    }}
    width={5}
  />
);
