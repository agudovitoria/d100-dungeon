import React from 'react';
import { DungeonShape } from '../common/DungeonShape';

export const BottomExitDungeon = ({ position }) => (
  <DungeonShape
    fill="#FFFFFF"
    height={30}
    position={{
      x: position.x + 40,
      y: position.y + 70
    }}
    width={20}
  />
);
