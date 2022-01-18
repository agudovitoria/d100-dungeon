import React from 'react';
import uuid from 'react-uuid';
import { Stage, FastLayer } from 'react-konva';
import { Dungeon } from '../shapes/Dungeon';

const COLUMNS = 8;

export const D100Stage = ({ dungeons }) => {
  const col = (x) => x%COLUMNS;
  const row = (x) => Math.floor(x/COLUMNS);

  const position = (x) => ({
    x: col(x) * 120 + 50,
    y: row(x) * 120 + 50
  });

  const navBarHeight = document.getElementById('navbar')?.offsetHeight || 0;
  const canvasHeight = window.innerHeight - navBarHeight;
  const canvasWidth = window.innerWidth;

  return (
    <Stage
      style={{ backgroundColor: 'lightgray' }}
      height={canvasHeight}
      width={canvasWidth}
    >
      <FastLayer>
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
              key={uuid()}
              position={position(id - 1)}
              size={size}
            />
          ))
        }
      </FastLayer>
    </Stage>
  );
};
