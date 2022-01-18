import React from 'react';
import { DungeonShape } from '../common/DungeonShape';

export const GreenDungeon = ({ position }) => (
  <DungeonShape
    bordered="true"
    fill="#58D68D"
    height={100}
    position={position}
    shadowed="true"
    width={100}
  />
);
    