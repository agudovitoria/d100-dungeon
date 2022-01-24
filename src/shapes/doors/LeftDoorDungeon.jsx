import React from 'react';
import { DOOR_COLOR } from '../../config/colorConstants';
import { POSITION_DOOR_LEFT } from '../../config/positionConstants';
import { SIZE_DOOR_LEFT } from '../../config/sizeConstants';
import { DungeonShape } from '../common/DungeonShape';

export const LeftDoorDungeon = () => (
  <DungeonShape
    fill={DOOR_COLOR}
    height={SIZE_DOOR_LEFT.height}
    position={POSITION_DOOR_LEFT}
    width={SIZE_DOOR_LEFT.width}
  />
);
