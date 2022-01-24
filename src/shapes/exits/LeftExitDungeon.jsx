import React from 'react';
import {
  EXIT_FILL
} from '../../config/styles';
import { SIZE_EXIT_LEFT } from "../../config/sizeConstants";
import { DungeonShape } from '../common/DungeonShape';
import { POSITION_EXIT_LEFT } from '../../config/positionConstants';


export const LeftExitDungeon = () => (
  <DungeonShape
    fill={EXIT_FILL}
    height={SIZE_EXIT_LEFT.height}
    position={POSITION_EXIT_LEFT}
    width={SIZE_EXIT_LEFT.width}
  />
);
