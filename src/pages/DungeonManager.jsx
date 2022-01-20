import React, {
  useEffect,
  useState
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  addDungeon,
  addStartDungeon,
  arrowClicked,
  getDungeons
} from '../redux/dungeons/dungeonsSlice';
import { D100Stage } from '../components/D100Stage';
import {
  getNextPosition,
  getNextRandomDungeonId
} from '../shapes/lib/mapping';
import { styles } from '../config/styles';

export const DungeonManager = () => {
  const dispatch = useDispatch();
  const dungeons = useSelector(getDungeons);
  const [canvasSize, setCanvasSize] = useState({ height: 0, width: 0});
  const [nextPosition, setNextPosition] = useState({ x: 0, y: 0 });

  const createNewDungeon = (id, direction) => {
    dispatch(arrowClicked({ id, direction }));
    
    const nextDungeonPosition = getNextPosition(nextPosition, direction);
    setNextPosition(nextDungeonPosition);
    
    const dungeonId = getNextRandomDungeonId();
    dispatch(addDungeon({
      id: dungeonId,
      position: nextDungeonPosition
    }));
    
    console.log(`Creating new dungeon (${dungeonId}) on ${direction} [${nextDungeonPosition.x}, ${nextDungeonPosition.y}]`);
  };

  useEffect(() => {
    const navBarHeight = document.getElementById('navbar')?.offsetHeight || 0;
    let canvasHeight = window.innerHeight - navBarHeight;
    let canvasWidth = window.innerWidth;
    
    if(canvasHeight > canvasWidth) {
      canvasHeight = canvasWidth -  navBarHeight;
    } else if(canvasWidth > canvasHeight) {
      canvasWidth = canvasHeight;
    }
    
    console.log(`Created canvas size ${canvasWidth}x${canvasHeight} px`);

    setCanvasSize({
      height: canvasHeight,
      width: canvasWidth
    });
    
    const initialPosition = {
      x: ((canvasWidth / 2)),
      y: styles.bySize.large.height / 2
    };
    
    console.log(`Initial position (${initialPosition.x},${initialPosition.y})`);

    setNextPosition(initialPosition);
    dispatch(addStartDungeon({ position: initialPosition }));
  }, [dispatch, setNextPosition]);

  return (
    <D100Stage
      canvasHeight={canvasSize.height}
      canvasWidth={canvasSize.width}
      dungeons={dungeons}
      onNextDungeonClick={createNewDungeon}
      nextPosition={nextPosition}
    />);
};
