import React from 'react';
import { Group, Rect } from 'react-konva';
import { COLOR_GREY } from '../config/colorConstants';
import { SIZE_LARGE } from '../config/sizeConstants';

const FLOOR_HEIGHT = 3600;
const FLOOR_WIDTH = 5400;

const Rooms = {
  horizontal: FLOOR_WIDTH / SIZE_LARGE.width,
  vertical: FLOOR_HEIGHT / SIZE_LARGE.height
};

export const Floor = () => (
  <Group>
    <Rect
      height={FLOOR_HEIGHT}
      stroke={COLOR_GREY}
      strokeWidth={4}
      width={FLOOR_WIDTH}
      x={0}
      y={0}
    />
    {
      Array.from(Array(Rooms.horizontal)).map((_hDungeon, hIndex) =>
        Array.from(Array(Rooms.vertical)).map((_vDungeon, vIndex) => (
          <Rect
            height={SIZE_LARGE.height}
            key={crypto.randomUUID()}
            stroke={COLOR_GREY}
            strokeWidth={0.5}
            width={SIZE_LARGE.width}
            x={hIndex * SIZE_LARGE.width}
            y={vIndex * SIZE_LARGE.height}
          />
        ))
      )
    }
  </Group>
);
