import { createSlice } from '@reduxjs/toolkit';
import { dungeons } from '../../shapes/dungeons';

const initialState = {
  dungeons: [],
};

export const dungeonsSlice = createSlice({
  name: 'dungeons',
  initialState,
  reducers: {
    addDungeon(state, action) {
      const persistedDungeon = dungeons[action.payload.id];
      const dungeon = {
        ...persistedDungeon,
        position: action.payload.position,
        ways: persistedDungeon.exits.filter(
          (exit) => !persistedDungeon.doors.includes(exit)
        ),
      };

      state.dungeons.push(dungeon);
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
      const dungeon = {
        ...persistedDungeon,
        position,
        ways,
      };

      state.dungeons.push(dungeon);
    },
    arrowClicked(state, action) {
      const { id, direction } = action.payload;
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

export const getDungeons = (state) => state.dungeons.dungeons;

export default dungeonsSlice.reducer;
