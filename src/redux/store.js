import { configureStore } from '@reduxjs/toolkit';
import dungeonsSlice from './dungeons/dungeonsSlice';

export const store = configureStore({
  reducer: {
    dungeons: dungeonsSlice,
  },
});
