import React from 'react';
import { DungeonShape } from '../common/DungeonShape';
import { COLOR_GREEN } from '../../config/colorConstants';
import { SIZE_LARGE } from '../../config/sizeConstants';

export const GreenDungeon = () => (
  <DungeonShape
    bordered="true"
    fill={COLOR_GREEN}
    height={SIZE_LARGE.height}
    shadowed="true"
    width={SIZE_LARGE.width}
  />
);
    