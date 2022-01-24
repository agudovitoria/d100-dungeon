import React from 'react';
import { DOOR_COLOR } from '../../config/colorConstants';
import { POSITION_DOOR_TOP } from '../../config/positionConstants';
import { SIZE_DOOR_TOP } from '../../config/sizeConstants';
import { DungeonShape } from '../common/DungeonShape';

export const TopDoorDungeon = () => (
  <DungeonShape
    fill={DOOR_COLOR}
    height={SIZE_DOOR_TOP.height}
    position={POSITION_DOOR_TOP}
    width={SIZE_DOOR_TOP.width}
  />
);
