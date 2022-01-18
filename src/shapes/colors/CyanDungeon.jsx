import React from 'react';
import { DungeonShape } from '../common/DungeonShape';


export const CyanDungeon = ({ position }) => (
  <DungeonShape
    bordered="true"
    fill="#AED6F1"
    height={100}
    position={position}
    shadowed="true"
    width={100}
  />
);
