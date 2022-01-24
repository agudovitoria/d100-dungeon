import React from 'react';
import { Rect } from 'react-konva';
import {
  SHADOW_STYLE,
  STROKE_STYLE
} from '../../config/styles';

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
    shadowBlur={shadowed ? SHADOW_STYLE.width : 0}
    stroke={STROKE_STYLE.color}
    strokeWidth={bordered ? STROKE_STYLE.width : 0}
    width={width}
    x={position.x}
    y={position.y}
  />
);
