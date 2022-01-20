import React from 'react';
import { Layer, Stage } from 'react-konva';
import uuid from 'react-uuid';
import { Dungeon } from '../shapes/Dungeon';

export const D100Stage = ({
  canvasHeight,
  canvasWidth,
  dungeons,
  onNextDungeonClick
}) => {
  return (
    <Stage
      className='flex justify-center bg-gray-300'
      height={canvasHeight}
      width={canvasWidth}
    >
      <Layer>
        {
          dungeons.map(({
            color,
            doors,
            exits,
            id,
            position,
            size,
            ways
          }) => (
            <Dungeon
              color={color}
              doors={doors}
              exits={exits}
              id={id}
              key={uuid()}
              nextDungeonClick={onNextDungeonClick}
              position={position}
              size={size}
              ways={ways}
            />
          ))
        }
      </Layer>
    </Stage>
  );
};
