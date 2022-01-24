import React from 'react';
import { DungeonShape } from '../common/DungeonShape';
import { COLOR_RED } from '../../config/colorConstants';
import { SIZE_LARGE } from '../../config/sizeConstants';

export const RedDungeon = () => (
  <DungeonShape
    bordered="true"
    fill={COLOR_RED}
    height={SIZE_LARGE.height}
    shadowed="true"
    width={SIZE_LARGE.width}
  />
);
