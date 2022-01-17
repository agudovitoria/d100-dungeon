import React from 'react';
import { Stage, Layer } from 'react-konva';
import { Dungeon } from '../shapes/Dungeon';
import { dungeons } from '../shapes/dungeons';

const COLUMNS = 10;

export const D100Stage = () => {
  const col = (x) => x%COLUMNS;
  const row = (x) => Math.floor(x/COLUMNS);

  const position = (x) => ({
    x: col(x) * 120 + 50,
    y: row(x) * 120 + 50
  });

  return (
    <Stage width={window.innerWidth} height={window.innerHeight * 1.5}>
      <Layer>
        {
          dungeons.map(({
            color,
            doors,
            exits,
            id,
            size,
          }) => (
            <Dungeon
              color={color}
              doors={doors}
              exits={exits}
              id={id}
              key={`dungeon-${id}-${color}`}
              position={position(id - 1)}
              size={size}
            />
          ))
        }
      </Layer>
    </Stage>
  );
};
