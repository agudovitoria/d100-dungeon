import React from 'react';
import { DungeonShape } from '../common/DungeonShape';

export const RedDungeon = ({ position }) => (
  <DungeonShape
    bordered="true"
    fill="#E74C3C"
    height={100}
    position={position}
    shadowed="true"
    width={100}
  />
);
