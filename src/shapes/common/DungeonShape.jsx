import React from 'react';
import { Rect } from 'react-konva';
import { styles } from '../../config/styles';

export const DungeonShape = ({
  bordered = false,
  fill,
  height,
  position = {
    x: 0,
    y: 0
  },
  shadowed = false,
  width
}) => (
  <Rect
    fill={fill}
    height={height}
    listening={false}
    perfectDrawEnabled={false}
    shadowBlur={shadowed ? styles.common.shadowBlur.width : 0}
    stroke={styles.common.stroke.color}
    strokeWidth={bordered ? styles.common.stroke.width : 0}
    width={width}
    x={position.x}
    y={position.y}
  />
);
