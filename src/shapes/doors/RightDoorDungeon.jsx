import React from 'react';
import { DOOR_COLOR } from '../../config/colorConstants';
import { POSITION_DOOR_RIGHT } from '../../config/positionConstants';
import { SIZE_DOOR_RIGHT } from '../../config/sizeConstants';
import { DungeonShape } from '../common/DungeonShape';

export const RightDoorDungeon = () => (
  <DungeonShape
    fill={DOOR_COLOR}
    height={SIZE_DOOR_RIGHT.height}
    position={POSITION_DOOR_RIGHT}
    width={SIZE_DOOR_RIGHT.width}
  />
);
