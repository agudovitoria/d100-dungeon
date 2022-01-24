import React from 'react';
import {
  EXIT_FILL} from '../../config/styles';
import { POSITON_EXIT_BOTTOM } from "../../config/positionConstants";
import { SIZE_EXIT_BOTTOM } from "../../config/sizeConstants";
import { DungeonShape } from '../common/DungeonShape';

export const BottomExitDungeon = () => (
  <DungeonShape
    fill={EXIT_FILL}
    height={SIZE_EXIT_BOTTOM.height}
    position={POSITON_EXIT_BOTTOM}
    width={SIZE_EXIT_BOTTOM.width}
  />
);
