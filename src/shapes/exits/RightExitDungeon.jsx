import React from 'react';
import { POSITION_EXIT_LEFT } from '../../config/positionConstants';
import { SIZE_EXIT_RIGHT } from '../../config/sizeConstants';
import { EXIT_FILL } from '../../config/styles';
import { DungeonShape } from '../common/DungeonShape';


export const RightExitDungeon = () => (
  <DungeonShape
    fill={EXIT_FILL}
    height={SIZE_EXIT_RIGHT.height}
    position={POSITION_EXIT_LEFT}
    width={SIZE_EXIT_RIGHT.width}
  />
);
