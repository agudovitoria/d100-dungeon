import React, { Fragment } from 'react';
import { Layer, Stage } from 'react-konva';
import uuid from 'react-uuid';
import { Dungeon } from '../shapes/Dungeon';
import { Floor } from '../shapes/Floor';

export const D100Stage = ({
  canvasHeight,
  canvasWidth,
  dungeons,
  onNextDungeonClick
}) => {
  return (
    <Fragment>
      {/* <div className='floor'></div> */}
      <Stage
        className='flex justify-center bg-gray-300 '
        height={canvasHeight}
        width={canvasWidth}
      >
        <Layer>
          <Floor />
        </Layer>
        <Layer>
          {
            dungeons.map(({
              angle,
              color,
              doors,
              exits,
              id,
              position,
              size,
              ways
            }) => (
              <Dungeon
                angle={angle}
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
    </Fragment>
  );
};
