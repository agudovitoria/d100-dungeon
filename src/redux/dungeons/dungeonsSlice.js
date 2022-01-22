import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import { dungeons } from '../../shapes/dungeons';

const initialState = {
  dungeons: [],
};

export const dungeonsSlice = createSlice({
  name: 'dungeons',
  initialState,
  reducers: {
    addDungeon(state, action) {
      const { angle, id, position } = action.payload;
      
      const dungeonModel = getDungeonModelById(id);

      if(!dungeonModel) {
        throw new Error(`Cannot find dungeon with id ${id} on models`);
      }
      
      const ways = dungeonModel.exits
      .filter((exit) => !dungeonModel.doors.includes(exit));

      const dungeonToPersist = {
        ...dungeonModel,
        angle,
        id: uuid(),
        position,
        ways,
      };

      state.dungeons.push(dungeonToPersist);
    },
    addStartDungeon(state, action) {
      if (dungeons.length === 100) {
        throw new Error('First dungeons used yet');
      }

      // Remove first dungeon from array to avoid reuse it
      const { position } = action.payload;
      const persistedDungeon = dungeons.shift();

      const ways = persistedDungeon.exits
        .filter((exit) => !persistedDungeon.doors.includes(exit));
      
        const dungeonToPersist = {
        ...persistedDungeon,
        id: uuid(),
        position,
        ways,
      };

      state.dungeons.push(dungeonToPersist);
    },
    arrowClicked(state, action) {
      const { id, direction } = action.payload;
      if(!id || !direction) {
        throw new Error(`Invalid arrow ${direction} on dungeon ${id} clicked`);
      }

      console.log(`Clicked ${direction} arrow on dungeon ${id}`);
      state.dungeons = state.dungeons
        .map((dungeon) => {
          if(dungeon.id === id) {
            return {
              ...dungeon,
              ways: dungeon.ways.filter(way => way !== direction)
            }
          }

          return dungeon;
        })
    },
  },
});

export const {
  addDungeon,
  addStartDungeon,
  arrowClicked
} = dungeonsSlice.actions;

export const getDungeons = state => state.dungeons.dungeons;
export const getDungeonModelById = id => dungeons.find((dungeon) => dungeon.id === id);
export const getDungeonById = state => id => state.dungeons.dungeons.find((dungeon) => dungeon.id === id);
export const getDungeonPositionById = state => id => getDungeonById(state)(id).position;

export default dungeonsSlice.reducer;
