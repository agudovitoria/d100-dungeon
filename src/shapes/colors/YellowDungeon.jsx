import React from 'react';
import { DungeonShape } from '../common/DungeonShape';

export const YellowDungeon = ({ position }) => (
  <DungeonShape
    bordered="true"
    fill="#F4D03F"
    height={100}
    position={position}
    shadowed="true"
    width={100}
  />
);
    