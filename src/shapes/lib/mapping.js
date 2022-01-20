import { styles } from '../../config/styles';
import { POSITIONS } from '../dungeons';

export const getNextRandomDungeonId = () => Math.floor(Math.random() * 100);

export const getNextPosition = (currentPosition, direction) => {
  const { x, y } = currentPosition;
  const { bySize: { large : { height: dungeonHeight, width: dungeonWidth}} } = styles;

  if (direction === POSITIONS.TOP) {
    return {
      x,
      y: y - dungeonHeight
    };
  }

  if (direction === POSITIONS.RIGHT) {
    return {
      x: x + dungeonWidth,
      y
    };
  }

  if (direction === POSITIONS.BOTTOM) {
    return {
      x,
      y: y + dungeonHeight
    };
  }

  if (direction === POSITIONS.LEFT) {
    return {
      x: x - dungeonWidth,
      y
    };
  }
};