import React from 'react';
import { DungeonShape } from '../common/DungeonShape';


export const LeftExitDungeon = ({ position }) => (
  <DungeonShape
    fill="#FFFFFF"
    height={20}
    position={{
      x: position.x,
      y: position.y + 40
    }}
    width={30}
  />
);
