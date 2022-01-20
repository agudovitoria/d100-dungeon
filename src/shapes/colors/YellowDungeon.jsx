import React from 'react';
import { DungeonShape } from '../common/DungeonShape';
import { styles } from '../../config/styles';

export const YellowDungeon = () => (
  <DungeonShape
    bordered="true"
    fill={styles.byColor.yellow.color}
    height={styles.bySize.large.height}
    shadowed="true"
    width={styles.bySize.large.width}
  />
);
    