import React from 'react';
import { DungeonShape } from '../common/DungeonShape';
import { styles } from '../../config/styles';


export const CyanDungeon = () => (
  <DungeonShape
    bordered="true"
    fill={styles.byColor.cyan.color}
    height={styles.bySize.large.height}
    shadowed="true"
    width={styles.bySize.large.width}
  />
);
