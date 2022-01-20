import React from 'react';
import { DungeonShape } from '../common/DungeonShape';
import { styles } from '../../config/styles';

export const BottomDoorDungeon = () => {
  const config = styles.byType.door; 
  const color = config.color;
  const {
    height,
    position,
    width
  } = config.byPosition.bottom;

  return (
    <DungeonShape
      fill={color}
      height={height}
      position={position}
      width={width}
    />
  );
};
