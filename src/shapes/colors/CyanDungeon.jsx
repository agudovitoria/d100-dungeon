import React from 'react';
import { DungeonShape } from '../common/DungeonShape';
import { COLOR_CYAN } from '../../config/colorConstants';
import { SIZE_LARGE } from '../../config/sizeConstants';


export const CyanDungeon = () => (
  <DungeonShape
    bordered="true"
    fill={COLOR_CYAN}
    height={SIZE_LARGE.height}
    shadowed="true"
    width={SIZE_LARGE.width}
  />
);
