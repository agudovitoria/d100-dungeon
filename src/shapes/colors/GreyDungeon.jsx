import React from 'react';
import { COLOR_GREY } from '../../config/colorConstants';
import { SIZE_LARGE } from '../../config/sizeConstants';
import { DungeonShape } from '../common/DungeonShape';

export const GreyDungeon = () => (
  <DungeonShape
    bordered="true"
    fill={COLOR_GREY}
    height={SIZE_LARGE.height}
    shadowed="true"
    width={SIZE_LARGE.width}
  />
);
    