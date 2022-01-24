import React from 'react';
import { DungeonShape } from '../common/DungeonShape';
import { COLOR_YELLOW } from '../../config/colorConstants';
import { SIZE_LARGE } from '../../config/sizeConstants';

export const YellowDungeon = () => (
  <DungeonShape
    bordered="true"
    fill={COLOR_YELLOW}
    height={SIZE_LARGE.height}
    shadowed="true"
    width={SIZE_LARGE.width}
  />
);
    