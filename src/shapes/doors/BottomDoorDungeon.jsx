import React from 'react';
import { DungeonShape } from '../common/DungeonShape';

export const BottomDoorDungeon = ({ position }) => (
  <DungeonShape
    fill="#707B7C"
    height={5}
    position={{
      x: position.x + 40,
      y: position.y + 70
    }}
    width={20}
    />
);
