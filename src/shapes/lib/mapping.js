import { SIZE_LARGE } from '../../config/sizeConstants';
import { POSITIONS } from '../dungeons';

export const getNextRandomDungeonId = () => Math.floor(Math.random() * 100);

export const getNextPosition = (currentPosition, direction) => {
  const { x, y } = currentPosition;

  if (direction === POSITIONS.TOP) {
    return {
      x,
      y: y - SIZE_LARGE.height
    };
  }

  if (direction === POSITIONS.RIGHT) {
    return {
      x: x + SIZE_LARGE.width,
      y
    };
  }

  if (direction === POSITIONS.BOTTOM) {
    return {
      x,
      y: y + SIZE_LARGE.height
    };
  }

  if (direction === POSITIONS.LEFT) {
    return {
      x: x - SIZE_LARGE.width,
      y
    };
  }
};