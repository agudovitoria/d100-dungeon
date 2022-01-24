import React from 'react';
import { DOOR_COLOR } from '../../config/colorConstants';
import { SIZE_DOOR_BOTTOM } from '../../config/sizeConstants';
import { POSITION_DOOR_BOTTOM } from '../../config/positionConstants';
import { DungeonShape } from '../common/DungeonShape';

export const BottomDoorDungeon = () => (
  <DungeonShape
    fill={DOOR_COLOR}
    height={SIZE_DOOR_BOTTOM.height}
    position={POSITION_DOOR_BOTTOM}
    width={SIZE_DOOR_BOTTOM.width}
  />
);
