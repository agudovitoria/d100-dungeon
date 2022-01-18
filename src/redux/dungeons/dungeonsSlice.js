import { createSlice } from '@reduxjs/toolkit';
import { dungeons } from '../../shapes/dungeons';

const initialState = {
  dungeons: [],
};

export const dungeonsSlice = createSlice({
  name: 'dungeons',
  initialState,
  reducers: {
    add: (state, action) => {
      state.dungeons.push(action.payload);
    },
    addRandom: (state) => {
      const dungeonId = Math.floor(Math.random() * 100) + 1;
      const dungeon = dungeons.find(({ id }) => id === dungeonId);
      state.dungeons.push(dungeon);
    }
  },
});

export const { add, addRandom } = dungeonsSlice.actions;

export const getDungeons = (state) => state.dungeons.dungeons;

export default dungeonsSlice.reducer;
