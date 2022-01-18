import React from 'react';
import { DungeonShape } from '../common/DungeonShape';


export const RightExitDungeon = ({ position }) => (
  <DungeonShape
    fill="#FFFFFF"
    height={20}
    position={{
      x: position.x + 70,
      y: position.y + 40
    }}
    width={30}
  />
);
